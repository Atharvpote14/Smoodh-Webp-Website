'use client'

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { products } from '@/data/products'
import ProductBottleScroll from '@/components/ProductBottleScroll'
import ProductTextOverlays from '@/components/ProductTextOverlays'
import ProductDetails from '@/components/ProductDetails'
import BuyNow from '@/components/BuyNow'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentProduct = products[currentIndex]

  useEffect(() => {
    // Update body background gradient when product changes
    document.body.style.background = currentProduct.gradient
    
    return () => {
      // Cleanup
    }
  }, [currentProduct])

  useEffect(() => {
    // Reset scroll to top when changing products
    window.scrollTo(0, 0)
  }, [currentIndex])

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length)
  }

  const previousProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)
  }

  const goToProduct = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Scroll Section */}
          <section className="relative">
            <ProductBottleScroll product={currentProduct} />
            <ProductTextOverlays product={currentProduct} />
          </section>

          {/* Product Details */}
          <ProductDetails product={currentProduct} />

          {/* Buy Now Section */}
          <BuyNow 
            product={currentProduct}
            onNextFlavor={nextProduct}
            hasNextFlavor={currentIndex < products.length - 1}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 flex flex-col space-y-4">
        <motion.button
          onClick={previousProduct}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
      </div>

      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 flex flex-col space-y-4">
        <motion.button
          onClick={nextProduct}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>

      {/* Bottom Navigation Menu */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
        <div className="glass rounded-full px-6 py-3 flex space-x-2">
          {products.map((product, index) => (
            <motion.button
              key={product.id}
              onClick={() => goToProduct(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                currentIndex === index
                  ? 'bg-white text-gray-900'
                  : 'text-white hover:bg-white/20'
              }`}
            >
              {product.name.replace('Smoodh ', '')}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}
