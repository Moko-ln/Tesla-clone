import Image from "next/image";
import Link from "next/link";

const Brand = () => {

    const onLoadPage = () => {
        window.location.reload();
    }
    return (
        <h1 className="w-2/6">
            <Link href="/" onClick={onLoadPage}>
                <figure>
                    <Image 
                        src="./logo.svg"
                        alt="Tesla logo"
                        width={100}
                        height={45}
                    />
                </figure>
            </Link>
        </h1>
    )
}

export default Brand;