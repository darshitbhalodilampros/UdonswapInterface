/** @type {import('next').NextConfig} */
// next.config.js

import path from 'path';

export function webpack(config) {
    // Add file-loader to handle mp4 files
    config.module.rules.push({
        test: /\.mp4$/,
        use: {
            loader: 'file-loader',
            options: {
                outputPath: 'static/media',
                name: '[name].[ext]'
            }
        }
    });

    return config;
}


