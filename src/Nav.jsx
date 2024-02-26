import {useState} from 'react'
import './App.css'

export default function Nav(){

    const[isLogo ,changeLogo]=useState(false)
    function toggle(){
        changeLogo(!isLogo)
    }
    return(
        <>
        <div className="navbar">
            <img src="/Logo.png" onClick={toggle} alt="" className={isLogo?'navlogo1':'navlogo2'} />
        </div>
        </>
    )
}