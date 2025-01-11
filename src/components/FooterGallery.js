"use client"

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import { Dialog, DialogContent } from "@/components/ui/dialog"

const images = [
    "/sample/6.png?height=150&width=150",
    "/sample/7.png?height=150&width=150",
    "/sample/3.png?height=150&width=150",
    "/sample/4.png?height=150&width=150",
]

export function ImageGallery() {
    const [selectedImage, setSelectedImage] = useState(null)

    return (
        <div>
            <div className="grid grid-cols-2 gap-2">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="cursor-pointer overflow-hidden rounded-lg"
                        onClick={() => setSelectedImage(src)}
                    >
                        <Image
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            width={150}
                            height={150}
                            className="object-cover transition-transform hover:scale-110"
                        />
                    </div>
                ))}
            </div>

            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                <DialogContent className="max-w-4xl p-0">
                    {/* <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute right-2 top-2 rounded-full bg-white p-2 text-gray-500 hover:text-gray-700"
                    > */}
                    {/* <X className="h-6 w-6" /> */}
                    {/* </button> */}
                    {selectedImage && (
                        <Image
                            src={selectedImage}
                            alt="Full size image"
                            width={1200}
                            height={800}
                            className="h-full w-full object-contain"
                        />
                    )}
                </DialogContent>
            </Dialog>
        </div>
    )
}

