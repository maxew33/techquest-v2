import '@/styles/globals.css'
import AppContext from '@/components/context/AppContext'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
    const [darkMode, setDarkMode] = useState(false)

    /*useEffect(() => {
        const bgCol = darkMode ? '#3d3d3d' : '#fcedda'
        const primary = darkMode ? '#fcedda' : '#3d3d3d'
        document.documentElement.style.setProperty('--bg', bgCol)
        document.documentElement.style.setProperty('--primary', primary)
    }, [darkMode])*/

    return (
        <AppContext.Provider value={{ darkMode, setDarkMode }}>
            <Head>
                {/* <!-- HTML Meta Tags --> */}
                <title>TechQuest Bordeaux</title>
                <meta
                    name="description"
                    content="TechQuest Bordeaux - Votre source pour des solutions web élégantes, modernes et efficaces. Création de sites web sur mesure pour répondre à vos besoins professionnels. Contactez-nous pour explorer les opportunités ensemble."
                />

                {/* <!-- Facebook Meta Tags --> */}
                <meta property="og:url" content="https://techquest.fr/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="TechQuest Bordeaux" />
                <meta
                    property="og:description"
                    content="TechQuest Bordeaux - Votre source pour des solutions web élégantes, modernes et efficaces. Création de sites web sur mesure pour répondre à vos besoins professionnels. Contactez-nous pour explorer les opportunités ensemble."
                />
                <meta
                    property="og:image"
                    content="https://techquest.fr/OG.webp"
                />

                {/* <!-- Twitter Meta Tags --> */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="techquest.fr" />
                <meta property="twitter:url" content="https://techquest.fr/" />
                <meta name="twitter:title" content="TechQuest Bordeaux" />
                <meta
                    name="twitter:description"
                    content="TechQuest Bordeaux - Votre source pour des solutions web élégantes, modernes et efficaces. Création de sites web sur mesure pour répondre à vos besoins professionnels. Contactez-nous pour explorer les opportunités ensemble."
                />
                <meta
                    name="twitter:image"
                    content="https://techquest.fr/OG.webp"
                />

                {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
            </Head>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </AppContext.Provider>
    )
}
