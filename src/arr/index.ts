import { get } from 'lodash'

export const arr = {
    /* 
        @name       findItem
        @desc       arr findItem
        @params     
                    arr     Array<any>
                    key     string
                    val     any
        @return     any     arr item
    */
    findItem(arr: Array<any>, key: string, val: any): any {
        const item = arr.find(item => {
            if (key) {
                const _val = get(item, key)
                if (_val === val) return item
            } else {
                if (item === val) return item
            }
        })
        return item
    }
}