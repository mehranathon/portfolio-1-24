/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:()=>[
        {
            source: '/',
            destination: '/profile/aboutme',
            permanent: true,
        },
        {
            source: '/profile/',
            destination: '/profile/aboutme',
            permanent: true,
        },
        {
            source: '/profile',
            destination: '/profile/aboutme',
            permanent: true,
        },

    ]
};
export default nextConfig;
