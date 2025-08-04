import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { I18nextProvider } from '@/lib/i18next-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Africa DevOps Summit',
    description: 'The Biggest DevOps Summit in Africa',
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