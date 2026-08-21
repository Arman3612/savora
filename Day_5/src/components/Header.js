import { Logo_URL } from "../utils/constants";
const Header=()=>{
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
                </ul>

            </div>
        </div>
    )
};
export default Header;