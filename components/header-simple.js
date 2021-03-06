import React from 'react'
import Link from 'next/link'

export default function HeaderSimple() {
    return (
        <Link href="/">
            <div className="text-center cursor-pointer">
                <h1 className="text-4xl font-serif my-8">Donosura</h1>
            </div>
        </Link>
    )
}
