import { IKeyVal, IParamsItem } from '../models'

export const location = {
    _getQueryStr(url: string = '') {
        let _url = url || window.location.href
        _url = decodeURIComponent(_url)
        const index = _url.indexOf('?')
        return _url.substring(index + 1)
    },
    /* 
        @name       listParams
        @desc       listParams
        @params     url     string     string[window.location.href]
        @return     Array<{
                        key: string,
                        val: string
                    }>
    */
    listParams(url: string = ''): Array<IParamsItem> {
        const arr: Array<IParamsItem> = []
        const queryStr = this._getQueryStr(url)
        queryStr.split('&').forEach(item => {
            const _arr = item.split('=')
            arr.push({ key: _arr[0], val: _arr[1] })
        })
        return arr
    },
    /* 
        @name       getParams
        @desc       getParams
        @params     url     string    string[window.location.href]
        @return     {
                        [key: string]: string
                    }
        waring: when route is hash route, the url params may have # and strings after #
    */
    getParams(url: string = ''): IKeyVal {
        const params: IKeyVal = {}
        const queryStr = this._getQueryStr(url)
        queryStr.split('&').forEach(item => {
            const arr = item.split('=')
            params[arr[0]] = arr[1]
        })
        return params
    },
    /* 
        @name       getParam
        @desc       getParam
        @params     
                    key     string
                    url     string    string[window.location.href]
        @return     string
    */
    getParam(key: string, url: string = ''): string {
        const params = this.getParams(url)
        return params[key]
    }
}