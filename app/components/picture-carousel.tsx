"use client"
import Image from "next/image"

export function PictureCarousel() {
  return (
    <div className="grid grid-cols-2 gap-4 rotate-45 transform scale-110">
      {[1, 2, 3, 4, 5].map((index) => (
        <div
          key={index}
          className="-rotate-45 overflow-hidden rounded-lg bg-white/10 backdrop-blur-sm aspect-square"
        >
          <Image
            src={`/placeholder.svg?height=300&width=300`}
            alt={`Carousel image ${index}`}
            width={300}
            height={300}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}

