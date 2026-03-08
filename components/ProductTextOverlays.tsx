'use client'

import { motion, useTransform } from 'framer-motion'
import { useScroll } from 'framer-motion'
import { Product } from '@/data/products'

interface ProductTextOverlaysProps {
  product: Product
}

export default function ProductTextOverlays({ product }: ProductTextOverlaysProps) {
  const { scrollYProgress } = useScroll()

  const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.25], [0, 1, 0])
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.35, 0.45], [0, 1, 0])
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.55, 0.65], [0, 1, 0])
  const opacity4 = useTransform(scrollYProgress, [0.6, 0.75, 0.85], [0, 1, 0])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-8">
        <motion.div
          style={{ opacity: opacity1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div>
            <h1 className="text-6xl md:text-8xl font-black text-white mb-4 drop-shadow-2xl">
              {product.section1.title}
            </h1>
            <p className="text-2xl md:text-3xl font-light text-white/90 drop-shadow-lg">
              {product.section1.subtitle}
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: opacity2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
              {product.section2.title}
            </h2>
            <p className="text-xl md:text-2xl font-light text-white/90 drop-shadow-lg max-w-3xl mx-auto">
              {product.section2.subtitle}
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: opacity3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
              {product.section3.title}
            </h2>
            <p className="text-xl md:text-2xl font-light text-white/90 drop-shadow-lg max-w-3xl mx-auto">
              {product.section3.subtitle}
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: opacity4 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
              {product.section4.title}
            </h2>
            {product.section4.subtitle && (
              <p className="text-xl md:text-2xl font-light text-white/90 drop-shadow-lg max-w-3xl mx-auto">
                {product.section4.subtitle}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
