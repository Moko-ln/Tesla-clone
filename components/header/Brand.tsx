import Image from "next/image";
import Link from "next/link";

const Brand = () => {

    const onLoadPage = () => {
        window.location.reload();
    }
    return (
        <div className="brand flex grow w-4/12">
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
            
        </div>
    )
}

export default Brand;