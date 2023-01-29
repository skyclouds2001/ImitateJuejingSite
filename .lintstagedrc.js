module.exports = {
  '*.{js,jsx,ts,tsx,json,vue,html,md,mdx}': ['eslint --fix'],
  '*.{js,jsx,ts,tsx,json,vue,html,md,mdx,yml,yaml,css,sass,scss,less,styl,stylus,sss}': ['prettier --write'],
  '*.{css,sass,scss,less,styl,stylus,sss,vue,html,md,mdx}': ['stylelint --fix'],
}
