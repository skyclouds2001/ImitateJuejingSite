module.exports = {
  '*.{js,jsx,ts,tsx,json,vue,html,md,mdx}': ['eslint --fix'],
  '*.{js,jsx,ts,tsx,json,vue,html,md,mdx,yml,yaml,css,sass,scss,less,styl,stylus,sss}': ['prettier --write'],
  '*.{js,jsx,ts,tsx,vue,html,md,mdx,css,sass,scss,less,styl,stylus,sss}': ['stylelint --fix'],
}
