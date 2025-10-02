/**
 *  * @import {Options} from '@mdx-js/loader'
  * @import {Configuration} from 'webpack'
   */

/** @type {Configuration} */
const webpackConfig = {
    module: {
        rules: [
            {
                test: /\.mdx?$/,
                use: [
                    {
                        loader: '@mdx-js/loader',
                    }
                ]
            }
        ]
    }
}

export default webpackConfig