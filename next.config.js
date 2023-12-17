/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   serverActions: true,
  // },
  reactStrictMode: true,
  distDir: 'out',
  webpack: (config, { isServer }) => {
    // Add the file-loader rule for PDFs
    config.module.rules.push({
      test: /\.(pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: '/_next/static/files',
            outputPath: `${isServer ? '../' : ''}static/files/`,
          },
        },
      ],
    })

    return config
  },
}
module.exports = nextConfig
