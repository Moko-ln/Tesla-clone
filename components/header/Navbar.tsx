import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="hidden gap-5 justify-center w-5/12 xl:flex">
        {
          items.map( (item, idx) => 
              <Link href={"#"} key={idx+1} className="text-xs py-1 rounded-sm px-4 xl:text-sm tracking-tight font-semibold hover:bg-zinc-400/10 nav-link">{ item }</Link>   
          )
        }      
    </nav>
  )
}

export default Navbar;

const items = ["Model S","Model 3", "Model X", "Model Y", "Powerwall", "Recharge"]