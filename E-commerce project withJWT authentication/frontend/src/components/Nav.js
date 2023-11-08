import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Nav=()=>{
    const auth=localStorage.getItem("user");
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate("/signup")
    }
    return(
        <div>

            <img
            alt="logo"
            className="logo"
             src="https://i.pinimg.com/474x/d2/17/f1/d217f1b6184ad205cab23a8890879fa2.jpg" />
            {auth? <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update product</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>

            </ul>:
            <ul className="nav-ul nav-right">
                    <li><Link to="/signup">SignUp</Link></li>
                    <li><Link to="/login">Login</Link></li>
            </ul>}
        </div>
    )
}

export default Nav;