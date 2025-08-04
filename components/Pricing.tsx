'use client'

import { useTranslation } from 'react-i18next'

const pricingTiers = [
    {
        name: "Early Bird",
        price: "$99",
        originalPrice: "$149",
        description: "Limited time offer - Save $50",
        features: [
            "Full conference access",
            "Networking lunch",
            "Conference materials",
            "Certificate of attendance",
            "Access to session recordings"
        ],
        popular: false
    },
    {
        name: "Regular",
        price: "$149",
        description: "Standard conference ticket",
        features: [
            "Full conference access",
            "Networking lunch",
            "Conference materials",
            "Certificate of attendance",
            "Access to session recordings",
            "Workshop participation"
        ],
        popular: true
    },
    {
        name: "VIP",
        price: "$299",
        description: "Premium experience",
        features: [
            "Full conference access",
            "VIP networking dinner",
            "Premium conference materials",
            "Certificate of attendance",
            "Access to session recordings",
            "Workshop participation",
            "Meet & greet with speakers",
            "Exclusive networking events"
        ],
        popular: false
    }
]

export default function Pricing() {
    const { t } = useTranslation()

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Choose Your Ticket
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Select the perfect ticket option for your Africa DevOps Summit experience
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {pricingTiers.map((tier, index) => (
                        <div key={index} className={`bg-white rounded-lg shadow-lg p-8 relative ${tier.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {tier.name}
                                </h3>
                                <div className="mb-2">
                                    <span className="text-4xl font-bold text-blue-600">
                                        {tier.price}
                                    </span>
                                    {tier.originalPrice && (
                                        <span className="text-gray-400 line-through ml-2">
                                            {tier.originalPrice}
                                        </span>
                                    )}
                                </div>
                                <p className="text-gray-600 text-sm">
                                    {tier.description}
                                </p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {tier.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${tier.popular
                                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                                }`}>
                                Get Tickets
                            </button>
                        </div>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">
                        All tickets include access to the conference app and networking platform
                    </p>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold">
                        View Detailed Comparison →
                    </button>
                </div>
            </div>
        </section>
    )
} 