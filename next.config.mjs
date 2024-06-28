/** @type {import('next').NextConfig} */
// next.config.js

import path from 'path';

function webpack(config) {
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

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
  }

module.exports = {nextConfig, webpack}
