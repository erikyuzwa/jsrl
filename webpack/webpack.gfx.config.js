const {resolve} = require('path')

const options = {

  entry: {
    renderer: resolve(__dirname, '..', './src/renderer.gfx.js')
  },
}

module.exports = options
