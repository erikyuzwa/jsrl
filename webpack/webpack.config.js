
require('dotenv').config()
const path = require('path')
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.base.config.js')
const unicodeTilesConfig = require('./webpack.unicodetiles.config.js')
const pixiConfig = require('./webpack.pixi.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, args) => {

  const mode = args.mode
  const target = process.env.target || 'web'
  const gfx = process.env.graphics || 'unicodetiles'
  let config

  switch(gfx) {
    case 'pixi':
      config = merge(commonConfig, pixiConfig)
    break
    default:
      config = merge(commonConfig, unicodeTilesConfig)
    break
  }

  config.plugins.push(
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true,
      title: `JSRL | ${gfx} | ${target}`, // TODO: fix target for electron when electron-renderer is removed
      graphics: gfx
    })
  )

  return config
}
