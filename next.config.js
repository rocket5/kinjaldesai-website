import BuilderDevTools from "@builder.io/dev-tools/next";

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = BuilderDevTools()({
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['api.builder.io'],
  },
});

export default config;
