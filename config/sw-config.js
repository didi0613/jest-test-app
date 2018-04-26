module.exports = {
  cache: {
    cacheId: "sample-app",
    runtimeCaching: [{
      handler: "fastest",
      urlPattern: "\/$"
    }],
    staticFileGlobs: ['dist/**/*']
  },
  manifest: {
    background: "#FFFFFF",
    title: "sample-app",
    short_name: "PWA",
    theme_color: "#FFFFFF"
  }
};
