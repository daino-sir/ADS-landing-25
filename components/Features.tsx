'use client'

import { useTranslation } from 'react-i18next'

const features = [
    { key: 'nextjs', icon: '⚡' },
    { key: 'tailwind', icon: '🎨' },
    { key: 'i18next', icon: '🌍' },
    { key: 'typescript', icon: '📝' },
]

export default function Features() {
    const { t } = useTranslation()

    return (
        <section className="py-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                    {t('features.title')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.key}
                            className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
                        >
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {t(`features.${feature.key}`)}
                            </h3>
                            <p className="text-gray-600">
                                {t(`features.${feature.key}Description`, 'Feature description')}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
} 