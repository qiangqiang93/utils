### @qietuzi/utils

A js library for common utils,一个常用工具库

### Install (安装)

```
npm i @qietuzi/utils --save
```

#### arr

a utils to extends window.location

```js
import { arr } from "@qietuzi/utils";
/* 
    @name       findItem
    @desc       arr findItem
    @params     
                arr     Array<any>
                key     string
                val     any
    @return     any     arr item
*/
arr.findItem();
```

#### env

a utils to judge **browser** environment

```js
import { env } from "@qietuzi/utils";

env.system();
// 'unknow' | 'windows' | 'macos' | 'linux' | 'android' | 'ios'

env.systemVersion();

env.engine();
// 'unknow' | 'webkit' | 'gecko' | 'presto' | 'trident'

env.engineVersion();

env.supporter();
// 'unknow' | 'edge' | 'opera' | 'chrome' | 'safari' | 'firefox' | 'opera' | 'iexplore'

env.supporterVersion();

env.platform();

env.shell();
// 'none' | 'wechat' | 'qq' | 'uc' | '360' | '2345' | 'sougou' | 'liebao' | 'maxthon'

env.shellVersion();

env.getEnvs();
// return all
```

#### location

a utils to extends window.location

```js
import { location } from "@qietuzi/utils";
// avoid confilct with window.location
import { location as _locltion } from "@qietuzi/utils";

/* 
    @name       getParam
    @desc       getParam
    @params     
                key     string
                url     string    string[window.location.href]
    @return     string
*/
_locltion.getParam();
/* 
    @name       getParams
    @desc       getParams
    @params     url     string    string[window.location.href]
    @return     {
                    [key: string]: string
                }
    waring: when route is hash route, the url params may have # and strings after #
*/
_locltion.getParams();
/* 
    @name       listParams
    @desc       listParams some times sign needs to keep the sort
    @params     url     string     string[window.location.href]
    @return     Array<{
                    key: string,
                    val: string
                }>
*/
_locltion.listParams();
```

#### lang

a utils to judge **character's** language.

```js
import { lang } from "@qietuzi/utils";
// 获取单个字符所属的语言类型（详情）
// get language of a single character
getLang(s: string): string
// 获取字符串中包含的语言类型
// get a languages list of a string
getLangs(str: string): Array<string>
// 获取字符串中每一个字符的语言类型
// get each character's languages list of a string
getEachLangs(str: string): Array<string>
```

#### number

```js
import { number } from "@qietuzi/utils";
/*
// 数字，数字字符串前补零
// number,number string zero fill
// zeroFill(9)      =>  '09'
// zeroFill(9, 3)   =>  '009'
// warn:最大不可超过2^32,否则会溢出错误
*/
zeroFill(val: number | string, num: number = 2):string
```
