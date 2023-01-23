import Link from "next/link";
const NavbarLeft = ({openMenu}:{openMenu: Function}) => {
  
  return (
    <nav className="hidden gap-5 grow justify-end w-4/12 xl:flex">
        {
          items.map( (item, idx) => 
              <Link href={"#"+idx} key={idx+1} className="px-2 text-sm font-medium">{ item }</Link>   
          )
        } 
        <button className="xl:flex rounded-sm bg-transparent px-2 text-sm font-medium " onClick={openMenu}>Menu</button>     
    </nav>
  )
}

export default NavbarLeft;

const items = ["Assistance","Shop", "Compte"]