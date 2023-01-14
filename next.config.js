/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: "raw.githubusercontent.com",
        },
      ],
    },
  }
}

module.exports = nextConfig;
