'use client'

import { useTranslation } from 'react-i18next'

const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
]

export default function LanguageSwitcher() {
    const { i18n } = useTranslation()

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
    }

    return (
        <div className="relative inline-block text-left">
            <div className="flex space-x-2">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${i18n.language === lang.code
                                ? 'bg-primary-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <span className="mr-2">{lang.flag}</span>
                        {lang.name}
                    </button>
                ))}
            </div>
        </div>
    )
} 