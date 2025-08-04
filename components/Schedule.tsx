'use client'

import { useTranslation } from 'react-i18next'

const schedule = [
    {
        time: "08:00 - 09:00",
        title: "Registration & Welcome Coffee",
        description: "Check-in and networking with fellow attendees"
    },
    {
        time: "09:00 - 10:30",
        title: "Keynote: The Future of DevOps in Africa",
        speaker: "Sarah Johnson, Microsoft",
        description: "Opening keynote on emerging trends and opportunities"
    },
    {
        time: "10:30 - 11:00",
        title: "Coffee Break & Networking",
        description: "Refreshments and networking opportunities"
    },
    {
        time: "11:00 - 12:30",
        title: "Panel Discussion: Scaling DevOps",
        speakers: "David Mwangi, Aisha Patel, Kwame Osei",
        description: "Expert panel on DevOps scaling strategies"
    },
    {
        time: "12:30 - 14:00",
        title: "Lunch & Networking",
        description: "Buffet lunch with networking opportunities"
    },
    {
        time: "14:00 - 15:30",
        title: "Workshop: Security in DevOps",
        speaker: "Aisha Patel, DevOps Solutions Ltd",
        description: "Hands-on workshop on security best practices"
    },
    {
        time: "15:30 - 16:00",
        title: "Afternoon Break",
        description: "Refreshments and networking"
    },
    {
        time: "16:00 - 17:30",
        title: "Platform Engineering Deep Dive",
        speaker: "Kwame Osei, Fintech Innovations",
        description: "Advanced session on platform engineering"
    }
]

export default function Schedule() {
    const { t } = useTranslation()

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Event Schedule
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Join us for a full day of learning, networking, and innovation
                    </p>
                </div>

                {/* Schedule Timeline */}
                <div className="max-w-4xl mx-auto">
                    {schedule.map((item, index) => (
                        <div key={index} className="flex flex-col md:flex-row gap-6 mb-8 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            {/* Time */}
                            <div className="md:w-1/4">
                                <div className="text-blue-600 font-bold text-lg">
                                    {item.time}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="md:w-3/4">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    {item.title}
                                </h3>
                                {item.speaker && (
                                    <p className="text-blue-600 font-medium mb-2">
                                        {item.speaker}
                                    </p>
                                )}
                                <p className="text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-12">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
                        Download Full Schedule
                    </button>
                </div>
            </div>
        </section>
    )
} 