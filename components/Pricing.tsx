'use client'

import { useTranslation } from 'react-i18next'

const pricingTiers = [
    {
        name: "Student Pass",
        price: "KES 1,000",
        perUnit: "per student",
        icon: "🌙",
        features: [
            "Full Access",
            "Meals & Refreshments",
            "Access to Student mentoring",
            "Access to learning tracks",
            "Valid student ID required at checkin"
        ],
        popular: false,
        buttonStyle: "outline"
    },
    {
        name: "Super Early Bird",
        price: "KES 1,500",
        perUnit: "per person",
        icon: "⭐",
        features: [
            "Full Access",
            "Meals & Refreshments",
            "Access to Student mentoring",
            "Access to learning tracks",
            "Valid student ID required at checkin"
        ],
        popular: true,
        buttonStyle: "primary"
    },
    {
        name: "Group Pass (3 Pax)",
        price: "KES 5,400",
        perUnit: "per group of 3",
        icon: "👥",
        features: [
            "Full Access",
            "Meals & Refreshments",
            "Access to Student mentoring",
            "Access to learning tracks",
            "Valid student ID required at checkin"
        ],
        popular: false,
        buttonStyle: "outline"
    },
    {
        name: "Ultimate Group Pass (5+)",
        price: "KES 8,000",
        perUnit: "per group of 5 and above",
        icon: "🌐",
        features: [
            "Full Access",
            "Meals & Refreshments",
            "Access to Student mentoring",
            "Access to learning tracks",
            "Valid student ID required at checkin"
        ],
        popular: false,
        buttonStyle: "outline"
    }
]

export default function Pricing() {
    const { t } = useTranslation()

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Plans that scale with business
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your Saas.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {pricingTiers.map((tier, index) => (
                        <div key={index} className={`bg-white rounded-lg shadow-lg p-8 relative ${tier.popular ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                            {tier.popular && (
                                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                    <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                        POPULAR CHOICE
                                    </span>
                                </div>
                            )}

                            <div className="text-center mb-6">
                                <div className="text-4xl mb-4">{tier.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                    {tier.name}
                                </h3>
                                <div className="mb-2">
                                    <span className="text-4xl font-bold text-blue-600">
                                        {tier.price}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-sm">
                                    {tier.perUnit}
                                </p>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {tier.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center text-gray-700">
                                        <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="text-center">
                                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${tier.buttonStyle === 'primary'
                                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                                        : 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-300'
                                    }`}>
                                    Get Ticket
                                </button>
                                <p className="text-gray-500 text-xs mt-2">
                                    No credit card required
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 