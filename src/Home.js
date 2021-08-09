import React from 'react'
import FeaturedProducts from './FeaturedProducts'
import Header from './Header'
import TrendingNow from './TrendingNow'

function Home() {
    return (
        <div>
            <Header/>
            <TrendingNow/>
            <FeaturedProducts/>
        </div>
    )
}

export default Home
