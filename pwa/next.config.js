/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

const nextConfig = {
    reactStrictMode: true,
    compiler: {
        removeConsole: process.env.NODE_ENV !== "development",
    },
    ...withPWA({
        dest: "public",
        register: true,
        skipWaiting: true,
        disable: process.env.NODE_ENV === "development"
    })
}

module.exports = nextConfig;
