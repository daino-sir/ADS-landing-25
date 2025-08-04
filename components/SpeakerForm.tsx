'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface FormData {
    // Personal Information
    firstName: string
    lastName: string
    email: string
    phone: string
    company: string
    jobTitle: string
    linkedin: string
    twitter: string
    github: string

    // Session Information
    sessionTitle: string
    sessionDescription: string
    sessionType: string
    sessionDuration: string
    sessionLevel: string
    sessionTags: string[]

    // Experience
    yearsOfExperience: string
    previousSpeakingExperience: string
    expertiseAreas: string[]

    // Additional Information
    bio: string
    whySpeak: string
    additionalNotes: string
}

const initialFormData: FormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    linkedin: '',
    twitter: '',
    github: '',
    sessionTitle: '',
    sessionDescription: '',
    sessionType: '',
    sessionDuration: '',
    sessionLevel: '',
    sessionTags: [],
    yearsOfExperience: '',
    previousSpeakingExperience: '',
    expertiseAreas: [],
    bio: '',
    whySpeak: '',
    additionalNotes: ''
}

export default function SpeakerForm() {
    const { t } = useTranslation()
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState<FormData>(initialFormData)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const totalSteps = 4

    const updateFormData = (field: keyof FormData, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1)
        }
    }

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000))

        console.log('Form submitted:', formData)
        setIsSubmitting(false)

        // Show success message or redirect
        alert('Thank you for your application! We will review your submission and get back to you soon.')
    }

    const renderStepIndicator = () => (
        <div className="flex justify-center mb-8">
            {Array.from({ length: totalSteps }, (_, i) => (
                <div key={i} className="flex items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${i + 1 === currentStep
                            ? 'bg-blue-600 text-white'
                            : i + 1 < currentStep
                                ? 'bg-green-500 text-white'
                                : 'bg-gray-200 text-gray-600'
                        }`}>
                        {i + 1 < currentStep ? '✓' : i + 1}
                    </div>
                    {i < totalSteps - 1 && (
                        <div className={`w-16 h-1 mx-2 ${i + 1 < currentStep ? 'bg-green-500' : 'bg-gray-200'
                            }`} />
                    )}
                </div>
            ))}
        </div>
    )

    const renderPersonalInfo = () => (
        <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Personal Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                    <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => updateFormData('firstName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                    <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => updateFormData('lastName', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company *</label>
                    <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => updateFormData('company', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Job Title *</label>
                    <input
                        type="text"
                        value={formData.jobTitle}
                        onChange={(e) => updateFormData('jobTitle', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                    />
                </div>
            </div>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
                    <input
                        type="url"
                        value={formData.linkedin}
                        onChange={(e) => updateFormData('linkedin', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="https://linkedin.com/in/yourprofile"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Twitter Handle</label>
                        <input
                            type="text"
                            value={formData.twitter}
                            onChange={(e) => updateFormData('twitter', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="@yourhandle"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">GitHub Profile</label>
                        <input
                            type="url"
                            value={formData.github}
                            onChange={(e) => updateFormData('github', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="https://github.com/yourusername"
                        />
                    </div>
                </div>
            </div>
        </div>
    )

    const renderSessionInfo = () => (
        <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Session Information</h3>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Session Title *</label>
                <input
                    type="text"
                    value={formData.sessionTitle}
                    onChange={(e) => updateFormData('sessionTitle', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Scaling DevOps in African Markets"
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Session Description *</label>
                <textarea
                    value={formData.sessionDescription}
                    onChange={(e) => updateFormData('sessionDescription', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Provide a detailed description of your session..."
                    required
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Session Type *</label>
                    <select
                        value={formData.sessionType}
                        onChange={(e) => updateFormData('sessionType', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                    >
                        <option value="">Select type</option>
                        <option value="keynote">Keynote</option>
                        <option value="presentation">Presentation</option>
                        <option value="workshop">Workshop</option>
                        <option value="panel">Panel Discussion</option>
                        <option value="lightning">Lightning Talk</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Duration *</label>
                    <select
                        value={formData.sessionDuration}
                        onChange={(e) => updateFormData('sessionDuration', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                    >
                        <option value="">Select duration</option>
                        <option value="15min">15 minutes</option>
                        <option value="30min">30 minutes</option>
                        <option value="45min">45 minutes</option>
                        <option value="60min">60 minutes</option>
                        <option value="90min">90 minutes</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Level *</label>
                    <select
                        value={formData.sessionLevel}
                        onChange={(e) => updateFormData('sessionLevel', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        required
                    >
                        <option value="">Select level</option>
                        <option value="beginner">Beginner</option>
                        <option value="intermediate">Intermediate</option>
                        <option value="advanced">Advanced</option>
                        <option value="all">All Levels</option>
                    </select>
                </div>
            </div>
        </div>
    )

    const renderExperience = () => (
        <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Experience & Expertise</h3>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience *</label>
                <select
                    value={formData.yearsOfExperience}
                    onChange={(e) => updateFormData('yearsOfExperience', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                >
                    <option value="">Select experience</option>
                    <option value="0-2">0-2 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="6-10">6-10 years</option>
                    <option value="10+">10+ years</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Previous Speaking Experience</label>
                <textarea
                    value={formData.previousSpeakingExperience}
                    onChange={(e) => updateFormData('previousSpeakingExperience', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe your previous speaking experience, if any..."
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Bio *</label>
                <textarea
                    value={formData.bio}
                    onChange={(e) => updateFormData('bio', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about yourself and your background..."
                    required
                />
            </div>
        </div>
    )

    const renderAdditionalInfo = () => (
        <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Additional Information</h3>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Why do you want to speak at Africa DevOps Summit? *</label>
                <textarea
                    value={formData.whySpeak}
                    onChange={(e) => updateFormData('whySpeak', e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Share your motivation for speaking at this event..."
                    required
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                <textarea
                    value={formData.additionalNotes}
                    onChange={(e) => updateFormData('additionalNotes', e.target.value)}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Any additional information you'd like to share..."
                />
            </div>
        </div>
    )

    const renderCurrentStep = () => {
        switch (currentStep) {
            case 1:
                return renderPersonalInfo()
            case 2:
                return renderSessionInfo()
            case 3:
                return renderExperience()
            case 4:
                return renderAdditionalInfo()
            default:
                return null
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-lg p-8">
            {renderStepIndicator()}

            <form onSubmit={handleSubmit}>
                {renderCurrentStep()}

                <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                    <button
                        type="button"
                        onClick={prevStep}
                        disabled={currentStep === 1}
                        className={`px-6 py-3 rounded-lg font-semibold transition-colors ${currentStep === 1
                                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                            }`}
                    >
                        Previous
                    </button>

                    <div className="flex space-x-4">
                        {currentStep < totalSteps ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                            >
                                Next
                            </button>
                        ) : (
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-6 py-3 rounded-lg font-semibold transition-colors ${isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-green-600 hover:bg-green-700 text-white'
                                    }`}
                            >
                                {isSubmitting ? 'Submitting...' : 'Submit Application'}
                            </button>
                        )}
                    </div>
                </div>
            </form>
        </div>
    )
} 