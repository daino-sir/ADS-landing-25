'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'

const sponsors = [
    {
        name: "Moringa",
        logo: "/moringa-logo.png",
    },
    {
        name: "JetBrains",
        logo: "/jetbrains.svg"
    },
    {
        name: "Nairobi DevOps Community",
        logo: "/sponsor-nairobi-devops.png"
    },
    {
        name: "Tinygone",
        logo: "/sponsor-tinygone.svg"
    }
]

export default function HallOfFame() {
    const { t } = useTranslation()

    return (
        <section className="py-20 bg-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center">
                    {/* Subtitle */}
                    <p className="text-blue-600 text-sm font-medium mb-4">
                        The only Hall of Fame that doesn&apos;t cost much to feature 😊
                    </p>

                    {/* Main Title */}
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                        We are Eternally Thankful to our Previous Sponsors
                    </h2>

                    {/* Instruction */}
                    <p className="text-gray-500 text-lg mb-12">
                        Join us and possibly you could be added here next.
                    </p>

                    {/* Sponsors Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                        {sponsors.map((sponsor, index) => (
                            <div key={index} className="flex flex-col items-center space-y-3 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 flex items-center justify-center mb-2">
                                    <Image
                                        src={sponsor.logo}
                                        alt={`${sponsor.name} logo`}
                                        width={64}
                                        height={64}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="font-semibold text-gray-900 text-sm">
                                        {sponsor.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Sponsors Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-8">
                        {sponsors.slice(1, 4).map((sponsor, index) => (
                            <div key={`second-${index}`} className="flex flex-col items-center space-y-3 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 flex items-center justify-center mb-2">
                                    <Image
                                        src={sponsor.logo}
                                        alt={`${sponsor.name} logo`}
                                        width={64}
                                        height={64}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>
                                <div className="text-center">
                                    <h3 className="font-semibold text-gray-900 text-sm">
                                        {sponsor.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                        {/* Repeat Moringa in the second row */}
                        {/* <div className="flex flex-col items-center space-y-3 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-16 h-16 flex items-center justify-center mb-2">
                                <Image
                                    src="/sponsor-moringa.svg"
                                    alt="Moringa logo"
                                    width={64}
                                    height={64}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                            <div className="text-center">
                                <h3 className="font-semibold text-gray-900 text-sm">
                                    Moringa
                                </h3>
                                <p className="text-gray-500 text-xs mt-1">
                                    Discover Grow Transform
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
} 