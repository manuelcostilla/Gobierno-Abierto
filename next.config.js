/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-7f90ff07d0eb47b59f75cd9cc79533be.r2.dev/**"
      }
    ]
  }
}

module.exports = nextConfig
