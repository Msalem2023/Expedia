import { Outlet } from "react-router-dom";
import Nav from "../Componants/nav.js";
import Footer from "../Componants/Footer.js";
function Layout() {

return(
    <>
    <Nav/>
    <main>
    <Outlet/>
    </main>
    <Footer/>
    </>
)
    
}
export default Layout