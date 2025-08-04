'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SpeakerForm from '@/components/SpeakerForm'

export default function BecomeSpeaker() {
    const { t } = useTranslation()

    return (
        <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Become a Speaker
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Share your expertise and inspire the next generation of DevOps professionals in Africa
                        </p>
                    </div>

                    <SpeakerForm />
                </div>
            </div>
        </main>
    )
} 