'use client'

import { useTranslation } from 'react-i18next'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import HallOfFame from '@/components/HallOfFame'
import Speakers from '@/components/Speakers'
import Schedule from '@/components/Schedule'
import Pricing from '@/components/Pricing'
import Footer from '@/components/Footer'

export default function Home() {
    const { t } = useTranslation()

    return (
        <main className="min-h-screen">
            {/* <Header /> */}
            <Hero />
            <About />
            <HallOfFame />
            <Speakers />
            <Schedule />
            <Pricing />
            <Footer />
        </main>
    )
} 