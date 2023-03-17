import Wrapper from "./Wrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Article = ({ data }) => {
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", checkIfMobile);
        checkIfMobile();

        return () => {
            window.removeEventListener("resize", checkIfMobile);
        };
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const checkIfMobile = () => {
        setMobile(window.innerWidth <= 768);
    }
    
    return (
        <motion.article 
            className="snap-start w-screen h-screen bg-cover bg-center bg-no-repeat flex items-center pt-32"
            style={{ backgroundImage: `url(./${data.imgUrl[mobile ? 1 : 0 ]})` }}
        >
            <Wrapper infosCar={data} />
        </motion.article>  
    )
}

export default Article;