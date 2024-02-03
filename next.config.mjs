/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:()=>[
        {
            source: '/',
            destination: '/profile/aboutme',
            permanent: true,
          },

    ]
};
export default nextConfig;
