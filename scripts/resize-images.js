import sharp from 'sharp'
import fs from 'fs'
import path from 'path'

const GALLERY_DIR = path.join(process.cwd(), 'public', 'gallery')
const PUBLIC_DIR = path.join(process.cwd(), 'public')
const MAX_WIDTH = 1920
const QUALITY = 80
const HERO_QUALITY = 85

async function resizeImages() {
  try {
    // Process gallery images
    const files = fs.readdirSync(GALLERY_DIR)
    for (const file of files) {
      if (file.match(/\.(jpg|jpeg|png)$/i)) {
        console.log(`Processing gallery image ${file}...`)
        const inputPath = path.join(GALLERY_DIR, file)
        const tempPath = path.join(GALLERY_DIR, `temp-${file}`)

        await sharp(inputPath)
          .rotate() // This will automatically rotate based on EXIF orientation
          .resize(MAX_WIDTH, null, {
            withoutEnlargement: true,
            fit: 'inside',
          })
          .jpeg({ quality: QUALITY })
          .toFile(tempPath)

        // Replace original with processed version
        fs.unlinkSync(inputPath)
        fs.renameSync(tempPath, inputPath)

        console.log(`✓ Resized ${file}`)
      }
    }

    // Process hero image
    const heroImage = 'cabin1.JPG'
    const heroInputPath = path.join(PUBLIC_DIR, heroImage)
    const heroTempPath = path.join(PUBLIC_DIR, `temp-${heroImage}`)

    if (fs.existsSync(heroInputPath)) {
      console.log(`Processing hero image ${heroImage}...`)
      await sharp(heroInputPath)
        .rotate() // This will automatically rotate based on EXIF orientation
        .resize(2560, null, {
          withoutEnlargement: true,
          fit: 'inside',
        })
        .jpeg({ quality: HERO_QUALITY })
        .toFile(heroTempPath)

      // Replace original with processed version
      fs.unlinkSync(heroInputPath)
      fs.renameSync(heroTempPath, heroInputPath)

      console.log(`✓ Resized hero image`)
    }

    console.log('All images processed successfully!')
  } catch (error) {
    console.error('Error processing images:', error)
  }
}

resizeImages()
