// vite.config.js
export default {
  // config options
  base: "/",
  build: {
    chunkSizeWarningLimit: 1600,
  },
  assetsInclude: ['*.glb'],
  publicDir:"public"
}
