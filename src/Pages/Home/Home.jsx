import React from 'react'
import './style.scss'

// @components
import Sidebar from '../../Components/Sidebar/Sidebar'

export default function Home() {
    return (
        <div className="home">
            {/* section => sidebar */}
            <Sidebar/>

            {/* section => home__main */}
            <div className="home__main">
                Hello World!
            </div>
        </div>
    )
}
