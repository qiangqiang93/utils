### @qietuzi/utils

A js library for common utils,一个常用工具库

### Install (安装)

```
npm i @qietuzi/utils --save
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
