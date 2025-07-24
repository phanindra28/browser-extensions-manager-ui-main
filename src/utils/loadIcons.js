const requireAll = require.context("../assets/images", false, /\.svg$/);

export const iconsMap = {};

requireAll.keys().forEach((filePath) => {
  const fileName = filePath.replace("./", ""); // remove './' to get 'home.svg'
  iconsMap[fileName] = requireAll(filePath);
});
