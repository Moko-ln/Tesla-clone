import { motion } from "framer-motion";
import Brand from "../header/Brand";
import Burger from "../header/Burger";
import NavbarLeft from "../header/NavbaLeft";
import Navbar from "../header/Navbar";
import { useState } from "react"
import NavbarHidden from "../header/NavbarHidden";

const Header = () => {
    const [show, setShow ] = useState(false);

    const openMenu = () => {
        setShow(true);
    }
    
    const closeMenu = () => {
        setShow(false);
    }
    return (
        <header className="container-fluid w-full z-50 fixed bg-transparent h-14 flex items-center justify-center">
            <div className="w-11/12 flex justify-between items-center h-full">
                <Brand />
                <Navbar />
                <NavbarLeft openMenu={openMenu}/>
                <Burger openMenu={openMenu}/>
                {
                    show && <NavbarHidden closeMenu={closeMenu}/>
                }
                
            </div>
        </header>
    )
}

export default Header;