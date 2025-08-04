'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'

export default function About() {
    const { t } = useTranslation()

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <div className="relative">
                        {/* Quotation Mark Icon */}
                        <div className="absolute -top-4 -left-4 text-gray-300 text-6xl font-serif">
                            &quot;
                        </div>

                        {/* Title */}
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 leading-tight relative z-10">
                            About Africa DevOps
                            <br />
                            <span className="text-blue-600">Summit 2025</span>
                        </h2>

                        {/* Description Paragraphs */}
                        <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                            <p>
                                This premier event brings together DevOps professionals, industry leaders,
                                innovators, and enthusiasts from across the African continent to explore
                                the evolution, current state, and future trends of DevOps.
                            </p>
                            <p>
                                Hosted in the vibrant city of Nairobi, this summit is a unique opportunity
                                to connect, learn, and contribute to the tech revolution shaping Africa&apos;s future.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="relative">
                        <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
                            <Image
                                src="/about-event.jpg"
                                alt="Africa DevOps Summit speaker presenting on stage with audience in background"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay for better text readability if needed */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 