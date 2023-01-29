import Wrapper from "./Wrapper";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Section = ({data}) => {
    const [imagebg, setImageBg] = useState(0);
    const isNotMobile = global.window && window.innerWidth < 768;
    
    useEffect(() => {
        changeBg()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const changeBg = () => {
        isNotMobile ? setImageBg(1) : setImageBg(0);
    }
    
    return (
            <motion.section 
                className="w-full h-screen bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(./${data.imgUrl[imagebg]})` }}
            >
                <Wrapper infosCar={data} />
            </motion.section>
        
    )
}

export default Section;