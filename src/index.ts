import { IKeyVal } from './models'

export * from "./arr/index";
export * from "./env/index";
export * from "./lang/index";
export * from "./number/index";
export * from "./location/index";

export const use = function (target: IKeyVal, methods: IKeyVal) {
    for (let p in methods) {
        target[p] = methods[p]
    }
}
