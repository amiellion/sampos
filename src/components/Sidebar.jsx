import React, { useState } from "react";
import logo from "./logo.png";
import {
    FaUserAlt,
    FaBars,
    FaShopify
} from "react-icons/fa";
import {
    BsFillCartPlusFill
} from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Sidebar = ({children}) => {
    const[isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "All Products",
            icon: <FaShopify />
        },
        {
            path: "/add",
            name: "View Cart",
            icon: <BsFillCartPlusFill />
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt />
        }
    ]
    return (
        <div className="container">
            <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
                <div className="top_section">
                  <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img className="i" src={logo} alt="logo" height={80} width={100} /></h1>
                  <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                  </div>
                </div>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
}

export default Sidebar;