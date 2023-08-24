import { NavLink, Link } from "react-router-dom";
import './top.css'
import 'bootstrap/dist/css/bootstrap.min.css';
function Nav() {
    let user = false
    const LoggedIn = window.localStorage.getItem("isLoggedIn")
    if (LoggedIn) {
        user = true
    }
    const logOut = () => {
        window.localStorage.clear()
        window.location.href = "./signIn"
    }


    return (
        <>
            <div className="d-flex justify-content-between">
                <div className="p-3">

                    <div >
                        <Link to="/"><img src="https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1" alt="to home page" /></Link>
                    </div>
                </div>
                <div className="p-3">
                    {!user && <NavLink to="/signIn" on className={({ isActive }) => isActive ? "active" : "notActive"}>Sign In</NavLink>}
                    {user && <Link to="/Profile" className="btn btn-outline-success m-2">Profile</Link>}
                    {user && <button onClick={logOut} className="btn btn-outline-success">Log Out</button>}
                    {!user && <NavLink to="/signUp" className={({ isActive }) => isActive ? "active" : "notActive"} >Sign up</NavLink>}
                </div>
            </div>


        </>

    )

}
export default Nav

