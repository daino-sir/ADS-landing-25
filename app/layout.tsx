import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { I18nextProvider } from '@/lib/i18next-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Next.js App with i18next',
    description: 'A Next.js app with Tailwind CSS and i18next translation',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <I18nextProvider>
                    {children}
                </I18nextProvider>
            </body>
        </html>
    )
} 