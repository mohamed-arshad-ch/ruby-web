import React from 'react'
import NavBar from '../3-Organisms/NavBar'
import About from '../3-Organisms/Sections/About'
import Carousel from '../3-Organisms/Sections/Carousel'
import Fact from '../3-Organisms/Sections/Fact'
import Service from '../3-Organisms/Sections/Service'
import SmallSection from '../3-Organisms/Sections/SmallSection'
import TopBar from '../3-Organisms/TopBar'

function HomePage() {
    return (
        <>
            <TopBar />
            <NavBar />
            <Carousel />
            <SmallSection />
            <About />
            <Fact />
            <Service />
        </>
    )
}

export default HomePage