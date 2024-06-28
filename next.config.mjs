/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
      unoptimized: true,
    },
    trailingSlash: true,
    webpack: (config) => {
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
  };
  
  module.exports = nextConfig;
  