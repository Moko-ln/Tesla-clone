import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="hidden gap-5 justify-center w-5/12 xl:flex">
        {
          items.map( (item, idx) => 
              <Link href={"#"} key={idx+1} className="text-xs px-2 xl:text-xs tracking-tight font-semibold">{ item }</Link>   
          )
        }      
    </nav>
  )
}

export default Navbar;

const items = ["Model S","Model 3", "Model X", "Model Y", "Powerwall", "Recharge"]