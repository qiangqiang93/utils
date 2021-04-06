import { IKeyVal, IParamsItem } from '../models';
export declare const location: {
    _getQueryStr(url?: string): string;
    listParams(url?: string): Array<IParamsItem>;
    getParams(url?: string): IKeyVal;
    getParam(key: string, url?: string): string;
};
