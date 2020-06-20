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
    plugins: [
        new WebpackPwaManifest({
            // the name of the generated manifest file
            filename: "manifest.json",
            // we aren't using webpack to generate our html so we 
            // set inject to false 
            inject: false,
            // set fingerprints to `false` to make the names of the generated
            // files predictable making it easier to refer to them in our code
            fingerprints: false,
            name: "Budget Tracker App",
            short_name: "Budget Tracker App",
            filename: "manifest.json",
            description: "Progressive Web App",
            background_color: "#ffffff",
            display: "standalone",
            start_url: "/",
        })
    ]
}