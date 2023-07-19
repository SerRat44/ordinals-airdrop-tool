const prod = process.env.NODE_ENV === "production";


const nextConfig = {
  reactStrictMode: true,
  assetPrefix: prod ? './' : '',
  output: 'export',
}

module.exports = nextConfig