"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const images = [
    "/sample/6.png?height=150&width=150",
    "/sample/7.png?height=150&width=150",
    "/sample/3.png?height=150&width=150",
    "/sample/4.png?height=150&width=150",
];

export function ImageGallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div>
            <div className="grid grid-cols-2 gap-2">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="relative group cursor-pointer overflow-hidden rounded-lg"
                        onClick={() => setSelectedImage(src)}
                    >
                        {/* Image */}
                        <Image
                            src={src}
                            alt={`Gallery image ${index + 1}`}
                            width={150}
                            height={150}
                            className="object-cover transition-transform duration-300 hover:scale-110"
                        />

                        {/* Hover Overlay */}
                        <div className="rounded-lg absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        </div>
                    </div>
                ))}
            </div>

            {/* Dialog for Full-Size Image */}
            <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
                <DialogContent className="max-w-4xl p-0">
                    {selectedImage && (
                        <Image
                            src={selectedImage}
                            alt="Full size image"
                            width={1200}
                            height={800}
                            className="h-full w-full object-contain rounded-lg"
                        />
                    )}
                </DialogContent>
            </Dialog>
        </div>
    );
}
