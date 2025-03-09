import fs from 'fs-extra'

try {
  fs.copySync('./src/assets', './dist/assets')
  console.log('Textures have been loaded!')
} catch (error) {
  console.error(error)
}
