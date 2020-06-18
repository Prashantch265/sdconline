import React from 'react'
import Navbar from '../components/toolbar/Navbar'
export default function AuthLayout(props) {
    return (
        <div>
            <Navbar/>
            <div>
                {props.children}
            </div>
            
        </div>
    )
}
