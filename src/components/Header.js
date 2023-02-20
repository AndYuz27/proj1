import React, {useState} from "react";
import "./style.css"




const Header = ({className, id, children, logo}) =>{

    const [open, setOpen] = useState(false)

    return <header className={`aaa_header ${className}`}>
        <div className="logo">{logo}</div>
        <div className="desktop_nav">{children}</div>
        <div className="mobile_nav">
            <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
                <img src="http://cdn.onlinewebfonts.com/svg/img_267205.png"/>
            <div className={`dropdown-menu ${open? 'active': 'inactive'}`}>
                                <ul>
                   <DropdownItem ch={children}/>
                </ul>
            </div>
            </div>
        </div>
    </header>
}
function DropdownItem(props) {
    return(
        <li className="dropdownItem">
            {props.ch}
        </li>
    )
}
export default Header