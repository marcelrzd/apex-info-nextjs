/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.contentapi.ea.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "apexlegendsstatus.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
