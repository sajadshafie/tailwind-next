/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    relay: {
      // This should match relay.config.js
      src: "./",
      artifactDirectory: "./__generated__",
      language: "typescript",
      eagerEsModules: false,
    },
  },
};

export default nextConfig;
