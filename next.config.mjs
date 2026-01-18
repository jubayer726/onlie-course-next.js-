/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "udvash-unmesh.com",
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
