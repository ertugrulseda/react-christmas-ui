const path = require("path"); // node yüklüyse bu vardır

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.resolve(__dirname, "build"),// build isminde bir klasör oluşturup bundle alıyor
    globalObject: 'this',
    library: {
      name: 'seda-react-lib',
      type: 'umd',
    }
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  }
};
