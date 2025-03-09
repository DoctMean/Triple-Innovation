const typescript = require('@rollup/plugin-typescript')
const pkg = require('../../package.json')

const year = new Date().getFullYear()
const banner = `/*!
 * LANTU v${pkg.version} (${pkg.homepage})
 * Copyright 2023-${year} ${pkg.author}
 */`

module.exports = {
  input: 'src/ts/lantu.ts',
  output: {
    file: 'dist/js/lantu.js',
    format: 'umd',
    banner,
    name: 'LANTU'
  },
  plugins: [typescript()]
}
