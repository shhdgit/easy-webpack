const rules = require('./rules.base.js')
const config = require('../../../config')

const devRules = [
  {
    test: /\.(styl|css)$/,
    include: config.dir.src,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
    ],
  },
]

devRules.forEach(rule => {
  rules.push(rule)
})

module.exports = {
  rules,
}
