import React from "react";
import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="items">
                    <div className="item">
                        <img src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3088&q=80" alt="happy dog" className="avatar"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;