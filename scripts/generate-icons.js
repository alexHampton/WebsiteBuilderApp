const sharp = require('sharp')

const outDir = 'public'

const makeSvg = (bg, fg) => `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect x="8" y="8" width="164" height="164" rx="36" fill="${bg}"/>
  <path d="M67.8 122.2C52.2 122.2 39.6 109.6 39.6 94C39.6 78.4 52.2 65.8 67.8 65.8H93.4V77.6H67.8C58.7 77.6 51.4 84.9 51.4 94C51.4 103.1 58.7 110.4 67.8 110.4H93.4V122.2H67.8Z" fill="${fg}"/>
  <path d="M101.4 57.8H141V69.6H113.2V86H138.6V97.8H113.2V122.2H101.4V57.8Z" fill="${fg}"/>
</svg>
`

const makeAppleSvg = (bg, fg) => `
<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 180 180">
  <rect width="180" height="180" fill="${bg}"/>
  <path d="M76.2 129.2C56.2 129.2 40 113 40 93C40 73 56.2 56.8 76.2 56.8H109V72H76.2C64.6 72 55.2 81.4 55.2 93C55.2 104.6 64.6 114 76.2 114H109V129.2H76.2Z" fill="${fg}"/>
  <path d="M117.6 46.6H140V61.8H117.6V46.6ZM117.6 70.8H140V86H117.6V70.8ZM117.6 95H140V110.2H117.6V95ZM117.6 119.2H140V134.4H117.6V119.2Z" fill="${fg}"/>
</svg>
`

async function run() {
  const lightSvg = Buffer.from(makeSvg('#111827', '#FFFFFF'))
  const darkSvg = Buffer.from(makeSvg('#F8FAFC', '#111827'))
  const appleSvg = Buffer.from(makeAppleSvg('#111827', '#FFFFFF'))

  await sharp(lightSvg)
    .resize(32, 32)
    .png({ compressionLevel: 9, palette: true })
    .toFile(`${outDir}/icon-light-32x32.png`)

  await sharp(darkSvg)
    .resize(32, 32)
    .png({ compressionLevel: 9, palette: true })
    .toFile(`${outDir}/icon-dark-32x32.png`)

  await sharp(appleSvg)
    .resize(180, 180)
    .png({ compressionLevel: 9, palette: true })
    .toFile(`${outDir}/apple-icon.png`)

  console.log('Generated icon-light-32x32.png, icon-dark-32x32.png, and apple-icon.png')
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
