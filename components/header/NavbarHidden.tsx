import { motion } from "framer-motion";
import Link from "next/link";
import { AiOutlineClose } from 'react-icons/ai';

const NavbarHidden = ({closeMenu}:{closeMenu: Function}) => {
  
  return (
    <nav 
        className="absolute right-0 top-0 h-screen bg-white flex flex-col gap-5 grow justify-start pt-20 w-72 pl-9 navbar-hidden"

        // initial={{ opacity: 0, x: "300px"}}
        // animate={{ opacity: 1, x: "0"}}
        // exit={{ opacity: 0, x: "300px"}}
    >
        {
          items.map( (item, idx) => 
              <Link href={"#"+idx} key={idx+1} className="px-2 text-md text-slate-600 font-medium">{ item }</Link>   
          )
        } 
        <button className="absolute top-8 right-5 rounded-sm bg-transparent px-2 text-xl font-bold " onClick={closeMenu}><AiOutlineClose /></button>     
    </nav>
  )
}

export default NavbarHidden;

const items = ["Véhicule disponible","Véhiculed'occasion", "Reprise", "Essais", "Véhicule de société", "Cybertruck", "Roadster", "Électricité pour les professionnels","Industries", "Énergie", "Nous trouver", "Événements", "Assistance", "Relations investisseurs"]