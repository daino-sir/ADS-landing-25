'use client'

import { useTranslation } from 'react-i18next'
import Image from 'next/image'

const speakers = [
    {
        id: 1,
        name: "Sarah Johnson",
        title: "DevOps Engineer at Microsoft",
        company: "Microsoft",
        image: "/speaker-1.jpg",
        topic: "Cloud-Native DevOps Practices"
    },
    {
        id: 2,
        name: "David Mwangi",
        title: "CTO at TechStart Africa",
        company: "TechStart Africa",
        image: "/speaker-2.jpg",
        topic: "Scaling DevOps in African Markets"
    },
    {
        id: 3,
        name: "Aisha Patel",
        title: "Senior DevOps Consultant",
        company: "DevOps Solutions Ltd",
        image: "/speaker-3.jpg",
        topic: "Security in DevOps Pipeline"
    },
    {
        id: 4,
        name: "Kwame Osei",
        title: "Platform Engineer",
        company: "Fintech Innovations",
        image: "/speaker-4.jpg",
        topic: "Platform Engineering Best Practices"
    }
]

export default function Speakers() {
    const { t } = useTranslation()

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Meet Our Speakers
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Learn from industry experts and thought leaders who are shaping the future of DevOps in Africa
                    </p>
                </div>

                {/* Speakers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {speakers.map((speaker) => (
                        <div key={speaker.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <div className="relative h-64">
                                <Image
                                    src={speaker.image}
                                    alt={`${speaker.name} - ${speaker.title}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {speaker.name}
                                </h3>
                                <p className="text-blue-600 font-medium mb-1">
                                    {speaker.title}
                                </p>
                                <p className="text-gray-600 text-sm mb-3">
                                    {speaker.company}
                                </p>
                                <p className="text-gray-700 text-sm">
                                    {speaker.topic}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 