'use client'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
  { number: 40, suffix: 'M+', label: 'Annual Visitors', subtext: 'More than Disneyland' },
  { number: 5.6, suffix: 'M', label: 'Square Feet', subtext: '4x size of Vatican City' },
  { number: 520, suffix: '+', label: 'Stores', subtext: 'World-class retail mix' },
  { number: 50, suffix: '+', label: 'Restaurants', subtext: 'Culinary destinations' },
]

export default function WhyProperty() {
  return (
    <section className="relative min-h-screen bg-black text-white py-24 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-400 mb-4">Why Mall of America</p>
          <h2 className="text-5xl lg:text-7xl font-light leading-tight">
            A City Within <br />
            <span className="font-bold">A City</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border-l border-gray-800 pl-6"
            >
              <div className="text-5xl lg:text-6xl font-light mb-2">
                <CountUp
                  end={stat.number}
                  duration={2.5}
                  decimals={stat.number % 1!== 0? 1 : 0}
                  enableScrollSpy
                  scrollSpyOnce
                />
                {stat.suffix}
              </div>
              <div className="text-lg font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.subtext}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-light mb-6">Heart of the Midwest</h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Located in Bloomington, Minnesota. 15 minutes from MSP Airport.
              Draws from 5-state region with 12M+ population. Average household income $95K+.
            </p>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-800 pb-3">
                <span className="text-gray-500">Primary Trade Area</span>
                <span className="font-medium">150 mile radius</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-3">
                <span className="text-gray-500">Annual Tourism</span>
                <span className="font-medium">4M+ out-of-state</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-3">
                <span className="text-gray-500">Dwell Time</span>
                <span className="font-medium">3.2 hours avg</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] bg-gray-900 rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1524661134323-17f98fda6fc5?w=800"
              alt="Mall of America Location"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <div className="text-sm text-gray-400 mb-1">44.8548° N, 93.2422° W</div>
              <div className="text-xl font-medium">Bloomington, MN</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}