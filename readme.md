# Kaboom Util 

Kaboom Util is a npm package for have access to a lot of Kaboom comps and plugins, in only one package!

**It is recommended to use this package with the latest version of kaboom, it is not guaranteed to work correctly in previous versions**

# Install 

NPM: `npm i kaboom-util`

# Quick Example

```.js
import kutil from "kaboom-util";

kaboom();

add([
    sprite("bean");
    kutil.blink(0.2)
]);

/*
Or you can import a specify component 

import { blink } from "kaboom-util";
*/
```

# Components List

* [blink](https://github.com/marklovers/kaboom-cookbook/tree/main/components/blink) - Blink your objects

# Plugins List

* [newgrounds-boom](https://github.com/lajbel/newgrounds-boom) - Use [Newgrounds](https://newgrounds.com) functions for your game