'use client'
import Image from 'next/image'

export default function Retail() {
  return (
    <section className="relative bg-black text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          A WORLD-CLASS <br /> RETAIL EXPERIENCE
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl">
          Mall of America is home to over 500 stores, including luxury brands, 
          flagship stores, and unique boutiques that you won't find anywhere else.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800" 
              alt="Luxury Shopping"
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-xl font-bold">Luxury Brands</h3>
            </div>
          </div>
          
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=800" 
              alt="Flagship Stores"
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-xl font-bold">Flagship Stores</h3>
            </div>
          </div>
          
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800" 
              alt="Boutiques"
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-xl font-bold">Unique Boutiques</h3>
            </div>
          </div>
          
          <div className="relative h-80 rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800" 
              alt="Dining"
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
              <h3 className="text-xl font-bold">Fine Dining</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}