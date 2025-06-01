'use client'
import Image from 'next/image'
import { AnimatedWrapper } from './AnimatedWrapper'

const images = [
  '/image1.jpeg', // Column 1 (tall)
  '/image2.jpeg', '/image5.jpg', // Column 2
  '/image4.jpg', // Column 3 (tall)
  '/image3.jpeg', '/image6.jpg', // Column 4
]

export const Gallery = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4 text-center mb-10">
        <AnimatedWrapper>
          <h2 className="text-4xl font-bold font-heading text-white mb-2">GALLERY</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </AnimatedWrapper>
      </div>

      <div className="grid grid-cols-4 gap-0 h-[60vh] sm:h-[80vh] overflow-hidden">
        {/* Column 1: 1 vertical image */}
        <div className="relative col-span-1 h-full">
          <GalleryImage src={images[0]} />
        </div>

        {/* Column 2: 2 stacked images */}
        <div className="grid grid-rows-2 h-full">
          <GalleryImage src={images[1]} />
          <GalleryImage src={images[2]} />
        </div>

        {/* Column 3: 1 vertical image */}
        <div className="relative col-span-1 h-full">
          <GalleryImage src={images[3]} />
        </div>

        {/* Column 4: 2 stacked images */}
        <div className="grid grid-rows-2 h-full">
          <GalleryImage src={images[4]} />
          <GalleryImage src={images[5]} />
        </div>
      </div>
    </section>
  )
}

const GalleryImage = ({ src }) => (
  <div className="relative w-full h-full group">
    <Image
      src={src}
      alt="Gallery Image"
      fill
      className="object-cover transition-all duration-300 group-hover:brightness-50"
    />
  </div>
)
