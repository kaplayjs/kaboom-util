# Kaboom Util 💥📦

Kaboom Util is a npm package for have access to a lot of Kaboom comps and plugins, in only one package!

**It is recommended to use this package with the latest version of kaboom, it is not guaranteed to work correctly in previous versions**

## Install 

npm: `npm i kaboom-util` <br>
cdn: `<script src=""></script>` <br>
mjs: `https://example/future`

## Quick Example

```js
import kutil from "kaboom-util";

kaboom({
    plugins: [
        kutil.blinkComp // returns blink()
        kutil.newgroundsPlugin // returns Newgrounds Plugin Functions
    ]
});

loadBean();

add([
    sprite("bean");
    blink(0.2)
]);

/*
Or you can import a specify component 

import { blinkComp } from "kaboom-util";
*/
```

## Components List

* [blinkComp](https://github.com/marklovers/kaboom-cookbook/tree/main/components/blink) - Blink your objects

## Plugins List

* [newgroundsPlugin](https://github.com/lajbel/newgrounds-boom) - Use [Newgrounds](https://newgrounds.com) functions for your game