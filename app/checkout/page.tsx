import React from 'react'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'
import Checkout from '../src/components/Checkout'

const page = () => {
    return (
        <div className="bg-[#f5f5f5] min-h-screen">
            <Header />
            <Checkout />
            <Footer />
        </div>
    )
}

export default page