'use client'

import { useState, useRef, useEffect } from 'react'
import { Volume2, VolumeX, Pause, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Testimonial() {
    // Initialize states to match video's default attributes
    const [isPlaying, setIsPlaying] = useState(false) // Changed to false since we'll update it after autoplay
    const [isMuted, setIsMuted] = useState(true) // Matches the muted attribute
    const videoRef = useRef(null)

    // Handle initial autoplay state
    useEffect(() => {
        if (videoRef.current) {
            // Update isPlaying state based on autoplay success
            videoRef.current.play().then(() => {
                setIsPlaying(true)
            }).catch(() => {
                setIsPlaying(false)
            })
        }
    }, [])

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
                setIsPlaying(false)
            } else {
                videoRef.current.play().then(() => {
                    setIsPlaying(true)
                }).catch((error) => {
                    console.error('Error playing video:', error)
                    setIsPlaying(false)
                })
            }
        }
    }

    const toggleMute = () => {
        if (videoRef.current) {
            const newMutedState = !isMuted
            videoRef.current.muted = newMutedState
            setIsMuted(newMutedState)
        }
    }

    // Add event listeners to keep UI in sync with video state
    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const handlePlay = () => setIsPlaying(true)
        const handlePause = () => setIsPlaying(false)
        const handleVolumeChange = () => setIsMuted(video.muted)

        video.addEventListener('play', handlePlay)
        video.addEventListener('pause', handlePause)
        video.addEventListener('volumechange', handleVolumeChange)

        return () => {
            video.removeEventListener('play', handlePlay)
            video.removeEventListener('pause', handlePause)
            video.removeEventListener('volumechange', handleVolumeChange)
        }
    }, [])
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


                {/* Play/Pause Overlay Indicator */}
                <div
                    className={`absolute inset-0 flex items-center justify-center bg-black/20 opacity duration-300}`}
                >
                </div>
            </div>
        </section>
    )
}