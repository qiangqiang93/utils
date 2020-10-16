export const number = {
    /* 
    @desc   数字，数字字符串前补零
    @params 
        val number|string       传入数字、数字字符串 
        num number[2]           最多可有显示位数 => 09
    @return string
    @warn   最大不可超过2^32,否则会溢出
    */
    zeroFill(val: number | string, num: number = 2):string {
        let min = 1
        let _val = Number(val)
        for (let i = 0; i < num - 1; i++) {
            min = min * 10
        }
        if (val >= min) {
            return String(_val)
        } else {
            const current = String(_val).split('.')[0].length
            const fillNum = num - current
            let valStr = String(_val)
            for(let i=0;i<fillNum;i++) {
                valStr = '0' + valStr
            }
            return valStr
        }
    }
}