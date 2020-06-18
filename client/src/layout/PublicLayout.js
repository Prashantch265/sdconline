import React,{Fragment} from 'react'
import Navbar from '../components/toolbar/Navbar'
export default function AuthLayout(props) {
    return (
        <Fragment>
         {props.children}
            
        </Fragment>
    )
}
