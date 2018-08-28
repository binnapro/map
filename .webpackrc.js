export default {
  disableCSSModules: true,
  extraBabelPlugins: [
    ["import", { libraryName: "antd", libraryDirectory: "lib", style: true }]
  ],
  theme: {
    "primary-color": "#75CA86"
  }
}