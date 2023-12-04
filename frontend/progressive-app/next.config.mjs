/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */


import next from 'next';
/** @type {import("next").NextConfig} */
import withPWA from 'next-pwa'


const config = {
    ...withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    })
}

export default config;
