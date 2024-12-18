/** @type {import('next').NextConfig} */
// config.resolve.alias["@mixins"] = "/public/mixins";

const nextConfig = {
  webpack: (config) => {
    config.resolve.alias["./@icons"] = "/public/icons";
    return config;
  },
};
export default nextConfig;
