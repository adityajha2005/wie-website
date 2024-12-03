'use client';

import dynamic from 'next/dynamic';

// Dynamically import `motion` from framer-motion
const MotionH1 = dynamic(() => import('framer-motion').then((mod) => mod.motion.h1));
const MotionDiv = dynamic(() => import('framer-motion').then((mod) => mod.motion.div));

// Dynamically import Image if desired (optional)
const DynamicImage = dynamic(() => import('next/image'), { ssr: false });

const images = [
  { id: 1, src: "/placeholder.svg", alt: "Gallery Image 1" },
  { id: 2, src: "/placeholder.svg", alt: "Gallery Image 2" },
  { id: 3, src: "/placeholder.svg", alt: "Gallery Image 3" },
  { id: 4, src: "/placeholder.svg", alt: "Gallery Image 4" },
  { id: 5, src: "/placeholder.svg", alt: "Gallery Image 5" },
  { id: 6, src: "/placeholder.svg", alt: "Gallery Image 6" },
];

export default function Gallery() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Use dynamically imported motion.h1 */}
      <MotionH1
        className="text-4xl font-bold text-white mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Gallery
      </MotionH1>
      <MotionDiv
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {images.map((image, index) => (
          <MotionDiv
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index }}
            whileHover={{ scale: 1.05 }}
          >
            <DynamicImage
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
            />
          </MotionDiv>
        ))}
      </MotionDiv>
    </div>
  );
}
