import type {Configuration} from 'webpack';

import {rules} from './webpack.rules';

// eslint-disable-next-line @typescript-eslint/no-var-requires
// const CopyPlugin = require("copy-webpack-plugin");

export const mainConfig: Configuration = {
    /**
     * This is the main entry point for your application, it's the first file
     * that runs in the main process.
     */
    entry: './src/index.ts',
    // Put your normal webpack config below here
    module: {
        rules,
    },
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
    },
    /*
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "src/assets", to: "assets" },
            ],
        }),
    ]
     */
};
