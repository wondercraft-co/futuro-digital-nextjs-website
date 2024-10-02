/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'futurodigital.wondercraft.co',
        port: '',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
