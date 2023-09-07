import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Main from '../components/Main'
import Footer from '../components/Footer'
import TopArrow from '../components/TopArrow'

export default function Home() {
    return (
        <div>
            <Header />
            <Hero />
            <Main />
            <Footer />
            {/* <TopArrow /> */}
        </div>
    )
}
