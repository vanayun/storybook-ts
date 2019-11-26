// storybook 내의 webpack.config설정을 추가할 수 있음.
module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [["react-app", { flow: false, typescript: true }]]
        }
      },
      require.resolve("react-docgen-typescript-loader")
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
