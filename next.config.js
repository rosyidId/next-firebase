/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,


  async rewrites(){
    return [
      {
        source: '/login',
        destination: '/auth/login'
      },
      {
        source: '/signup',
        destination: '/auth/signup'
      }
    ]
  }
}

module.exports = nextConfig
