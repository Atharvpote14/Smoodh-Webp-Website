'use client'

import { useEffect, useRef, useState } from 'react'
import { useScroll } from 'framer-motion'
import { Product } from '@/data/products'

interface ProductBottleScrollProps {
  product: Product
}

export default function ProductBottleScroll({ product }: ProductBottleScrollProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [images, setImages] = useState<HTMLImageElement[]>([])
  const { scrollYProgress } = useScroll()
  
  // Dynamic frame count based on product
  const getFrameCount = () => {
    switch (product.id) {
      case 'chocolate':
      case 'lassi':
        return 122 // frames 000-121
      case 'chocolate-hazelnut':
        return 145 // frames 000-144
      default:
        return 122
    }
  }
  
  const frameCount = getFrameCount()

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = []
    
    const loadImages = async () => {
      for (let i = 0; i < frameCount; i++) {
        const img = new Image()
        const frameNumber = i.toString().padStart(3, '0')
        
        // All images are now PNG format
        const extension = 'png'
        img.src = `${product.folderPath}/frame_${frameNumber}_delay-0.041s.${extension}`
        
        await new Promise((resolve) => {
          img.onload = resolve
        })
        
        loadedImages.push(img)
      }
      
      setImages(loadedImages)
    }

    loadImages()
  }, [product.folderPath])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || images.length === 0) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const updateCanvas = () => {
      const progress = scrollYProgress.get()
      
      // Set canvas size to match container
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
      }

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Show gradient background for first 5% of scroll
      if (progress < 0.05) {
        // Draw gradient background
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        
        // Parse the product gradient and apply it
        if (product.gradient.includes('135deg')) {
          // Extract colors from gradient string
          const colorMatches = product.gradient.match(/#[0-9a-fA-F]{6}/g)
          if (colorMatches && colorMatches.length >= 2) {
            gradient.addColorStop(0, colorMatches[0])
            gradient.addColorStop(1, colorMatches[1])
          }
        }
        
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        
        // Add enhanced text with better colors and styling
        // Main product name - special handling for lassi for better contrast
        let mainTextColor = product.themeColor
        let mainTextShadow = 'rgba(0, 0, 0, 0.3)'
        
        // Special color treatment for lassi to improve visibility
        if (product.id === 'lassi') {
          mainTextColor = '#AD1457' // Darker pink for better contrast
          mainTextShadow = 'rgba(0, 0, 0, 0.5)' // Stronger shadow
        }
        
        ctx.fillStyle = mainTextColor
        ctx.font = 'bold 56px Outfit'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.shadowColor = mainTextShadow
        ctx.shadowBlur = product.id === 'lassi' ? 15 : 10
        ctx.shadowOffsetX = product.id === 'lassi' ? 4 : 2
        ctx.shadowOffsetY = product.id === 'lassi' ? 4 : 2
        ctx.fillText(product.name, canvas.width / 2, canvas.height / 2)
        
        // Subtitle with enhanced contrast for lassi
        ctx.font = '28px Outfit'
        let subtitleColor = 'rgba(255, 255, 255, 0.95)'
        let subtitleShadow = 'rgba(0, 0, 0, 0.5)'
        
        // Special subtitle treatment for lassi
        if (product.id === 'lassi') {
          subtitleColor = '#FFFFFF' // Pure white for maximum contrast
          subtitleShadow = 'rgba(0, 0, 0, 0.7)' // Even stronger shadow
        }
        
        ctx.fillStyle = subtitleColor
        ctx.shadowColor = subtitleShadow
        ctx.shadowBlur = product.id === 'lassi' ? 20 : 15
        ctx.shadowOffsetX = product.id === 'lassi' ? 5 : 3
        ctx.shadowOffsetY = product.id === 'lassi' ? 5 : 3
        ctx.fillText(product.subName, canvas.width / 2, canvas.height / 2 + 70)
      } else {
        // Show bottle animation after 5% scroll and use remaining 95% for full animation
        const adjustedProgress = (progress - 0.05) / 0.95 // Use 95% of scroll for complete animation
        const frameIndex = Math.min(Math.floor(adjustedProgress * (frameCount - 1)), frameCount - 1)
        const currentImage = images[frameIndex]

        if (currentImage) {
          // Draw gradient background first
          const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
          const colorMatches = product.gradient.match(/#[0-9a-fA-F]{6}/g)
          if (colorMatches && colorMatches.length >= 2) {
            gradient.addColorStop(0, colorMatches[0])
            gradient.addColorStop(1, colorMatches[1])
          }
          ctx.fillStyle = gradient
          ctx.fillRect(0, 0, canvas.width, canvas.height)

          // Calculate fade-in opacity (first 5% of bottle animation)
          const fadeProgress = Math.min(adjustedProgress * 20, 1) // Fade in over first 5% of remaining scroll
          const opacity = fadeProgress

          // Calculate scaling to fit image in canvas (contain)
          const scale = Math.min(
            canvas.width / currentImage.width,
            canvas.height / currentImage.height
          )

          const scaledWidth = currentImage.width * scale
          const scaledHeight = currentImage.height * scale

          // Center the image
          const x = (canvas.width - scaledWidth) / 2
          const y = (canvas.height - scaledHeight) / 2

          // Apply fade-in effect
          ctx.globalAlpha = opacity
          ctx.drawImage(currentImage, x, y, scaledWidth, scaledHeight)
          ctx.globalAlpha = 1 // Reset global alpha
        }
      }
    }

    const unsubscribe = scrollYProgress.on('change', updateCanvas)
    updateCanvas()

    return () => unsubscribe()
  }, [scrollYProgress, images])

  return (
    <div className="relative h-[500vh]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="max-w-full max-h-full"
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  )
}
