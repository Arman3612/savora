import { Logo_URL } from "../utils/constants";
import { useState } from "react";
 const Header=()=>{
//     let btnName="Login";
const [btnNameReact,setBtnNameReact]=useState("Login");
    return (
        <div className="header">
            <div className="logo container">
                <img className="logo" src={ Logo_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Name</li>
                    <li>About us</li>
                    <li>contact us</li>
                    <li>Cart</li>
                    <button 
                    className="Login"
                    onClick={()=>{
                        btnNameReact == "Login"
                         ? setBtnNameReact("Logout")
                         :setBtnNameReact("Login");
                    }}
                    >
                        {btnNameReact}
                        </button>
                </ul>

            </div>
        </div>
    )
 };
export default Header;