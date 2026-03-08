import { Outfit } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata = {
  title: 'Smoodh by Atharv | Smooth Sips, Bold Flavors',
  description: 'Premium flavoured milk & lassi brand. Experience creamy tradition, velvety indulgence, and nutty perfection in every sip.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-outfit antialiased`}>
        {children}
      </body>
    </html>
  )
}
