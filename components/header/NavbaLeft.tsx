import Link from "next/link";
const NavbarLeft = ({openMenu}:{openMenu: Function}) => {
  
  return (
    <nav className="hidden gap-4 grow justify-end w-2/6 xl:flex">
        {
          items.map( (item, idx) => 
              <Link href={"#"+idx} key={idx+1} className="px-4 py-1 text-sm font-medium hover:bg-zinc-400/10 nav-link">{ item }</Link>   
          )
        } 
        <button className="xl:flex rounded-sm bg-transparent px-4 py-1 text-sm font-medium hover:bg-zinc-400/10 nav-link" onClick={() => openMenu()}>Menu</button>     
    </nav>
  )
}

export default NavbarLeft;

const items = ["Assistance","Shop", "Compte"]
