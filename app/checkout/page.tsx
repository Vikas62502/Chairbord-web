import React, { Suspense } from 'react'
import Checkout from '../src/components/Checkout'

const page = () => {
    return (
        <div className="bg-[#f5f5f5] min-h-screen">
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-600">Loading checkout…</div>}>
                <Checkout />
            </Suspense>
        </div>
    )
}

export default page
