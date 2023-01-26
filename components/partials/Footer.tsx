import Link from "next/link";

const Footer = () => {
    return (
        <footer className="2xl:absolute xl:absolute lg:absolute bottom-0 flex items-center bg-transparent w-full px-10 py-4 text-sm">
            <div className="relative w-full">
                <p className="md:max-xl:mb-7 md:max-lg:text-center xl:absolute bottom-0 left-0 text-center">Pensez à covoiturer #SeDéplacerMoinsPolluer</p>
                <ul className="md:flex-row md:max-2xl:gap-5 items-center flex flex-col grow justify-center gap-2">
                    {
                        footerInfo.map( (item, index) => 
                            <li key={index+1}>
                                <Link href={"#"}>{ item }</Link>    
                            </li>
                        )
                    }
                </ul>
            </div>
        </footer>
    )
}

export default Footer;

const footerInfo = [
    "Tesla © 2023",
    "Mention Légales",
    "Contact",
    "Carrieres",
    "Actualités",
    "Localisation"
]