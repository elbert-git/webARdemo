// vite.config.js
export default {
  // config options
  // base: "https://elbert-git.github.io/webARdemo",
  base: "/webARdemo",
  build: {
    chunkSizeWarningLimit: 1600,
  },
  assetsInclude: ['*.glb'],
  publicDir:"public"
}
