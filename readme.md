# Kaboom Util 

Kaboom Util is a npm package for have access to a lot of Kaboom comps and plugins, in only one package!

**It is recommended to use this package with the latest version of kaboom, it is not guaranteed to work correctly in previous versions**

# Quick Example

Install the package: `npm i kaboom-util`

Kaboom Repl: 

```.js
import { blink } from "kaboom-util";

kaboom();

add([
    sprite("bean");
    blink(0.2)
]);
```