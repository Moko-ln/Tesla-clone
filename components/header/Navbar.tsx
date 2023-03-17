import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="grow-[2] w-2/6 navbar">
      <ul className="w-full h-fit flex justify-between">
        {
          items.map( (item, idx) => 
          <li key={idx+1} className="nav-item" >
            <Link href={"#"} className="text-xs xl:text-sm font-semibold">{ item }</Link>   
          </li>
          )
        }   
      </ul>        
    </nav>
  )
}

export default Navbar;

const items = ["Model S","Model 3", "Model X", "Model Y", "Powerwall", "Recharge"]