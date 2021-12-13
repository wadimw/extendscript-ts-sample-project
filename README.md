# ExtendScript sample project

This is a sample project for Adobe ExtendScript script development using TypeScript and Node.js.

ExtendScript typings are sourced from [Types-for-Adobe](https://github.com/bbb999/Types-for-Adobe), ES5 functionality is available as well via [extendscript-es5-shim](https://github.com/ExtendScript/extendscript-es5-shim) (e.g. `JSON.stringify` and `Array.prototype.map`). [Babel](https://babeljs.io) handles transpiling TypeScript to JavaScript and most of ES3 compatibility. Other Node packages can be installed and imported as well. To avoid ExtendScript's custom `#include` syntax, during build project is bundled into single JS file with [Webpack](https://webpack.js.org/).

Ready script can be compiled to binary with [jsxbin](https://github.com/runegan/jsxbin).

For debugging [ExtendScript Debugger plugin](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug) can be used – VSCode launch task is defined. Because output JS file can differ significantly from TS source due to transpilation and bundling, it's best to use `$.bp()` for breakpoints that persist between builds.

## Usage
- install [Node.js](https://nodejs.org/en/)
- run `npm install` to install dependencies
- You're ready to go!

## Notes
As a proof of working module imports, project uses [fast-xml-parser](https://github.com/NaturalIntelligence/fast-xml-parser) which uses `os` module and global `window` object. These are shimmed just to make the library work, but are not necessary otherwise.