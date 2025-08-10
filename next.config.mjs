/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['raw.githubusercontent.com', 'pokeapi.co', 'cdn2.bulbagarden.net', "veekun.com"],
  }
};

export default nextConfig;
