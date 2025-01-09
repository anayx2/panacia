'use client'

import { useState, useRef } from 'react'
import { Volume2, VolumeX, Pause, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Testimonial() {
    const [isPlaying, setIsPlaying] = useState(true)
    const [isMuted, setIsMuted] = useState(true)
    const videoRef = useRef(null)

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    return (
        <section className="relative w-full">
            {/* Video Container */}
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                <video
                    ref={videoRef}
                    className="h-full w-full object-cover "
                    autoPlay
                    loop
                    muted
                    playsInline
                    onClick={togglePlay}
                    aria-label="Background video"
                >
                    <source src="/testimonial.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Video Controls */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent p-4">
                    <div className="flex items-center gap-2">
                        {/* Play/Pause Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                            onClick={togglePlay}
                            aria-label={isPlaying ? 'Pause video' : 'Play video'}
                        >
                            {isPlaying ? (
                                <Pause className="h-5 w-5" />
                            ) : (
                                <Play className="h-5 w-5" />
                            )}
                        </Button>

                        {/* Mute/Unmute Button */}
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-10 w-10 rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                            onClick={toggleMute}
                            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                        >
                            {isMuted ? (
                                <VolumeX className="h-5 w-5" />
                            ) : (
                                <Volume2 className="h-5 w-5" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Play/Pause Overlay Indicator */}
                <div
                    className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'
                        }`}
                >
                    {!isPlaying && (
                        <div className="rounded-full bg-white/20 p-6 backdrop-blur-sm">
                            <Play className="h-12 w-12 text-white" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}