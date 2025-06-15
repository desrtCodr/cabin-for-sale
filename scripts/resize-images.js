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
    const galleryFiles = fs
      .readdirSync(GALLERY_DIR)
      .filter((file) => file.match(/\.(jpg|jpeg|png)$/i))
      .sort()

    // Create a temporary directory for processed gallery images
    const galleryTempDir = path.join(GALLERY_DIR, 'temp')
    if (!fs.existsSync(galleryTempDir)) {
      fs.mkdirSync(galleryTempDir)
    }

    // Process each gallery image
    for (let i = 0; i < galleryFiles.length; i++) {
      const file = galleryFiles[i]
      const newName = `gallery-${String(i + 1).padStart(2, '0')}.jpg`
      console.log(`Processing gallery image ${file} -> ${newName}...`)

      const inputPath = path.join(GALLERY_DIR, file)
      const outputPath = path.join(galleryTempDir, newName)

      await sharp(inputPath)
        .rotate()
        .resize(MAX_WIDTH, null, {
          withoutEnlargement: true,
          fit: 'inside',
        })
        .jpeg({ quality: QUALITY })
        .toFile(outputPath)

      console.log(`✓ Resized ${newName}`)
    }

    // Move processed gallery files back to gallery directory
    const processedGalleryFiles = fs.readdirSync(galleryTempDir)
    for (const file of processedGalleryFiles) {
      fs.renameSync(path.join(galleryTempDir, file), path.join(GALLERY_DIR, file))
    }

    // Remove gallery temp directory
    fs.rmdirSync(galleryTempDir)

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

    console.log('All gallery images processed and renamed successfully!')
  } catch (error) {
    console.error('Error processing images:', error)
  }
}

resizeImages()
