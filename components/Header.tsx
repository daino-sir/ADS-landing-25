'use client'

import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
    const { t } = useTranslation()

    return (
        <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <div className="w-wrap h-wrap flex items-center justify-center">
                        <Image
                            src="/logo.svg"
                            alt="Africa DevOps Summit Logo"
                            width={32}
                            height={32}
                            className="w-16 h-16"
                        />
                    </div>
                </div>
                <nav className="hidden md:flex items-center space-x-8 text-white">
                    <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
                    <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                    <a href="#speakers" className="hover:text-blue-400 transition-colors">Speakers</a>
                    <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
                    <Link href="/become-speaker" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                        Become a Speaker
                    </Link>
                </nav>
            </div>
        </header>
    )
} 