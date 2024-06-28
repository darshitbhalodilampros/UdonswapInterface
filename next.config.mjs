/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
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

export default nextConfig;