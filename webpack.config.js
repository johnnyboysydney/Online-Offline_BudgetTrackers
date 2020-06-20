// Dependencies and variables
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");

const config = {
    entry: {
        main: [
            path.join(__dirname + "/public/db.js"),
            path.join(__dirname + "/public/index.js")
        ]
    },
    output: {
        path: path.join(__dirname + "/public/dist"),
        filename: "bundle.js"
    },
    mode: "development",
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"]
              }
            }
          }
        ]
      },
    plugins: [
        new WebpackPwaManifest({
            // the name of the generated manifest file
            filename: "manifest.webmanifest",
            // we aren't using webpack to generate our html so we 
            // set inject to false 
            inject: false,
            // set fingerprints to `false` to make the names of the generated
            // files predictable making it easier to refer to them in our code
            fingerprints: false,
            name: "Budget Tracker App",
            short_name: "Budget Tracker App",
            description: "Progressive Web App",
            background_color: "#ffffff",
            display: "standalone",
            start_url: "/",
            icons: [
                {
                  src: path.resolve("./public/icons/icon-512x512.png"),
                  sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
                },
              ],
        })
    ]
};
// Exporting the module config
module.exports = config;