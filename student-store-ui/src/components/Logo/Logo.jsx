import * as React from "react"
import "./Logo.css"
import Image from "../../images/codepathLogo.jpeg"

export default function Logo() {
    return (
        <div className="logo">
            <a href="/">
            <img src={Image} alt="CodePath Logo" />
            </a>
    
        </div>
    )
}