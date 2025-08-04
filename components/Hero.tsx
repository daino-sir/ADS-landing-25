'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'

export default function Hero() {
    const { t } = useTranslation()

    return (
        <section className="min-h-screen flex">
            {/* Left Section - Image */}
            <div className="w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black/40 z-10"></div>
                <div className="absolute top-6 left-6 z-20 flex items-center space-x-2">
                    <div className="w-wrap h-wrap flex items-center justify-center">
                        <Image
                            src="/logo.svg"
                            alt="Africa DevOps Summit Logo"
                            width={32}
                            height={32}
                            className="w-32 h-32"
                        />
                    </div>
                </div>
                <div className="absolute bottom-6 left-6 z-20">
                    <div className="text-white font-bold text-6xl">31st</div>
                    <div className="text-blue-400 font-bold text-xl">OCT. 2025</div>
                    <div className="text-white text-lg mt-1">Nairobi, Kenya</div>
                </div>
                {/* Actual group photo from Nairobi DevOps Summit */}
                <div className="w-full h-full relative">
                    <Image
                        src="/hero-image.jpg"
                        alt="Nairobi DevOps Summit attendees - A diverse group of young professionals and tech enthusiasts gathered for a group photo, wearing event t-shirts with 'NAIROBI DEVOPS SUMMIT' branding"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Right Section - Digital Content */}
            <div className="w-1/2 bg-black relative overflow-hidden">
                {/* Topographic lines background */}
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/bg.svg"
                        alt="Topographic lines"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Navigation */}
                <div className="absolute top-6 right-6 z-20 flex space-x-6 text-white text-sm">
                    <a href="#" className="text-blue-400 font-medium">Home</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Get your Ticket</a>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 h-full flex flex-col justify-center px-12">
                    {/* Tagline */}
                    <div className="mb-8">
                        <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                            The Biggest DevOps Summit in Africa
                        </span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Taking DevOps<br />
                        beyond the Pipeline
                    </h1>

                    {/* Description */}
                    <p className="text-white text-lg mb-8 max-w-md">
                        Join industry leaders, engineers, and visionaries transforming DevOps across the continent.
                    </p>

                    {/* CTA Button */}
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors w-fit">
                        Book your seat Today
                    </button>
                </div>
            </div>
        </section>
    )
} 