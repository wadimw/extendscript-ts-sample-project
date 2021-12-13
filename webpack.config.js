const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.ts",
    mode: "production",
    output: {
        globalObject: "this",
        path: path.resolve(__dirname, "dist"),
        filename: "app.bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)$/,
                loader: "babel-loader",
                options: {
                    presets: [["@babel/preset-env", { loose: true, modules: "commonjs" }], "@babel/preset-typescript"],
                    plugins: ["@babel/plugin-transform-object-assign"], // needed for fast-xml-parser
                },
            },
        ],
    },
    resolve: {
        fallback: {
            os: require.resolve("os-browserify/browser"), // needed for fast-xml-parser
        },
    },
    optimization: {
        minimize: false, // minification may produce syntax errors because ExtendScript does not support nested ternary operators without parentheses
    },
    target: "browserslist",
    // devtool: "inline-source-map",
    plugins: [
        new webpack.ProvidePlugin({
            window: path.resolve(__dirname, "shims/window"), // window => ExtendScript $.global, needed for fast-xml-parser
        }),
    ],
};
