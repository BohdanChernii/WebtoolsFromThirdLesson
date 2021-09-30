module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /.(jpg|png)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8,
              outputPath: "images",
            },
          },
        ],
      },
    ],
  },
};
