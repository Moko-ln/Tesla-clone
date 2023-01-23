const Footer = () => {
    return (
        <footer className="absolute bottom-0 flex items-center bg-transparent w-full px-10 py-4 text-sm">
            <div className="relative w-full">
                <p className="absolute bottom-0 left-0">Pensez à covoiturer #SeDéplacerMoinsPolluer</p>
                <ul className="flex grow justify-center gap-5">
                    {
                        footerInfo.map( (item, index) => 
                            <li key={index+1}>{ item }</li>
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