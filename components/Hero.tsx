'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import Link from 'next/link'

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
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0,50 Q25,30 50,50 T100,50" stroke="white" strokeWidth="0.5" fill="none" />
                        <path d="M0,60 Q25,40 50,60 T100,60" stroke="white" strokeWidth="0.5" fill="none" />
                        <path d="M0,40 Q25,20 50,40 T100,40" stroke="white" strokeWidth="0.5" fill="none" />
                        <path d="M0,70 Q25,50 50,70 T100,70" stroke="white" strokeWidth="0.5" fill="none" />
                        <path d="M0,30 Q25,10 50,30 T100,30" stroke="white" strokeWidth="0.5" fill="none" />
                    </svg>
                </div>

                {/* Navigation */}
                <div className="absolute top-6 right-6 z-20 flex items-center space-x-6 text-white text-sm">
                    <a href="#" className="text-blue-400 font-medium">Home</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Get your Ticket</a>
                    <Link href="/become-speaker" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                        Become a Speaker
                    </Link>
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

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors w-fit">
                            Book your seat Today
                        </button>
                        <Link
                            href="/become-speaker"
                            className="bg-transparent hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors w-fit border-2 border-white"
                        >
                            Become a Speaker
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
} 