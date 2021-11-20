# ExtendScript sample project

This is a sample project for Adobe ExtendScript script development using TypeScript and Node.js.

Typings are sourced from [Types-for-Adobe](https://github.com/bbb999/Types-for-Adobe), but ES5 functionality is available as well via [extendscript-es5-shim](https://github.com/ExtendScript/extendscript-es5-shim) (e.g. `JSON.stringify` and `Array.prototype.map`).

Other Node packages can be installed and imported as well. To avoid ExtendScript's custom `#include` syntax, transpiled project can be bundled into single JS file with [Browserify](https://github.com/browserify/browserify). Finally, ready script can be compiled to binary with [jsxbin](https://github.com/runegan/jsxbin).

All above tasks are defined as build tasks for VSCode in [tasks.json](.vscode/tasks.json).

For debugging [ExtendScript Debugger plugin](https://marketplace.visualstudio.com/items?itemName=Adobe.extendscript-debug) can be used – VSCode launch task is defined as well. Because output JS file can differ significantly from TS source due to transpilation and bundling, it's best to use `$.bp()` for breakpoints that persist between builds.

## Usage

### Prerequisites
- install [Node.js](https://nodejs.org/en/)
- run `npm install` to install dependencies
- You're ready to go!

### Compile TS to JS
`npx tsc`

### Bundle to single JS file
`npx browserify build/index.js -o build/bundled/app.js`

### Compile to binary
`npx jsxbin -i build/bundled/app.js -o build/bundled/app.jsxbin`
