/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/errorfixer',
  images: {
    remotePatterns: [
      { 
        protocol: 'https',
        hostname: 'cdn.sanity.io', 
      },
    ],
  },
};

export default nextConfig;
