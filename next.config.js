/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: [
          "ix-gaming.s3.ap-southeast-1.amazonaws.com",
          "https://encrypted-tbn0.gstatic.com",
        ],
      },
}

module.exports = nextConfig
