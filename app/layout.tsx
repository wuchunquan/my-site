import './globals.css'
import './common.scss'
import 'animate.css'
import './animate.css'
import {Inter} from 'next/font/google'
import Header from "@/components/Header";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: 'WCQ-SITE',
    description: 'wcq的站点',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <meta name="viewport"
                  content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            <title>WCQ-SITE</title>
        </head>
        <body className={inter.className}>
        <Header/>
        {children}
        </body>
        </html>
    )
}
