import React from "react";
import "./style.css"
const Header = ({className, id, children, logo}) =>{
    return <header className={`aaa_header ${className}`}>
        <div className="logo">{logo}</div>
        <div className="desktop_nav">{children}</div>
        <div className="mobile_nav">{children}</div>
    </header>
}
export default Header