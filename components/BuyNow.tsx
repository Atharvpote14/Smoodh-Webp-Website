'use client'

import { motion } from 'framer-motion'
import { Product } from '@/data/products'

interface BuyNowProps {
  product: Product
  onNextFlavor: () => void
  hasNextFlavor: boolean
}

export default function BuyNow({ product, onNextFlavor, hasNextFlavor }: BuyNowProps) {
  return (
    <section className="py-20 px-6" style={{ background: product.gradient }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-12"
        >
          {/* Freshness Section */}
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              {product.freshnessSection.title}
            </h3>
            <p className="text-lg text-white/90 leading-relaxed">
              {product.freshnessSection.description}
            </p>
          </div>

          {/* Buy Now Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto glass rounded-3xl p-8 shadow-2xl"
          >
            <div className="space-y-8">
              {/* Price */}
              <div>
                <div className="text-5xl font-black text-white mb-2">
                  {product.buyNowSection.price}
                </div>
                <div className="text-white/80">
                  {product.buyNowSection.unit}
                </div>
              </div>

              {/* Processing Parameters */}
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white">What's Inside</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {product.buyNowSection.processingParams.map((param, index) => (
                    <motion.div
                      key={param}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white font-medium"
                    >
                      {param}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-4 bg-white text-gray-900 font-bold rounded-full btn-glow transition-all duration-300"
                  style={{ boxShadow: `0 0 30px ${product.themeColor}60` }}
                >
                  Add to Cart
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  className="w-full py-4 bg-transparent border-2 border-white text-white font-semibold rounded-full transition-all duration-300 hover:bg-white/10"
                >
                  Subscribe & Save 10%
                </motion.button>
              </div>

              {/* Delivery Promise */}
              <div className="pt-6 border-t border-white/20 space-y-3">
                <div className="flex items-center justify-center space-x-2 text-white/80">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6z" />
                    <path d="M10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                  <span className="text-sm">{product.buyNowSection.deliveryPromise}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-white/80">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm">{product.buyNowSection.returnPolicy}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Next Flavor Button */}
          {hasNextFlavor && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="pt-12"
            >
              <motion.button
                onClick={onNextFlavor}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-12 py-6 bg-white text-gray-900 font-bold rounded-full slanted-edge transition-all duration-300"
                style={{ boxShadow: `0 10px 40px ${product.themeColor}40` }}
              >
                <span className="relative z-10 text-lg">Explore Next Flavor →</span>
              </motion.button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
