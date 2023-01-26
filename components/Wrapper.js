/* eslint-disable @next/next/no-html-link-for-pages */
import { motion } from "framer-motion";
import Link from "next/link";
import { TfiAngleDown } from 'react-icons/tfi';

const Wrapper = ({infosCar}) => {

    return (
        <motion.div className=" w-full h-full pt-36 pb-5 flex flex-col justify-between items-center" id={infosCar.title}>
            {/* Top */}
            <div 
                className="overflow-hidden"
            >
                <motion.h1 
                    className="md:px-10 text-4xl text-gray-900 font-semibold text-center mb-6"

                    initial={{ opacity:0, y: "100%"}}
                    animate={{ opacity:1, y: "0"}}
                    transition={{ duration: .5, delay:.6}}
                >
                    {infosCar.model }
                </motion.h1>
            </div>
            {/* Middle */}
            <div 
                className="h-full flex flex-col items-center justify-between w-full mb-8"
            >
                <div className="overflow-hidden">
                    <motion.div
                        initial={{ opacity:0, y: "100%" }}
                        animate={{ opacity:1, y: "0" }}
                        transition={{ duration: .7, delay:1.1 }}
                    >
                        {
                            (infosCar.text) ?
                            <Link href="/" className="border-zinc-500 border-b-2 hover:border-zinc-700 text-center"
                            >
                                { infosCar.text }
                            </Link>
                            :
                            ""
                        } 
                    </motion.div>
                </div>

                <div className="overflow-hidden w-full">
                    <motion.div 
                        className="md:flex-row flex flex-col items-center justify-center gap-6"

                        initial={{ opacity:0, y: "100%" }}
                        animate={{ opacity:1, y: "0" }}
                        transition={{ duration: .7, delay:1.1 }}
                    >
                        { infosCar.btn_bottom && <button className="opacity-75 md:w-64 bg-zinc-800 w-11/12 text-white p-2 rounded-md text-sm font-medium">{infosCar.btn_bottom}</button>}
                        { infosCar.btn_top && <button className="opacity-75 md:w-64 bg-white w-11/12 text-zinc-600 p-2 rounded-md text-sm font-medium">{infosCar.btn_top}</button>}
                    </motion.div>
                </div>
                
            </div>

            {/* Bottom */}
            <div className="overflow-hidden relative h-20" >
                <motion.div 
                    className="flex flex-col gap-2 items-center h-full"

                    initial={{ opacity:0, y: "-100%" }}
                    animate={{ opacity:1, y: "0" }}
                    transition={{ duration: .7, delay:1.6}}
                >
                    {
                        (infosCar.sub_text) ? 

                        infosCar.sub_text[0] === "link" ?
                        <Link href="/" className="text-sm text-zinc-600 border-zinc-500 border-b-2 hover:border-zinc-700 text-center">{infosCar.sub_text[1] }</Link>
                        :
                        <p className="text-sm text-zinc-600">{infosCar.sub_text[1]}</p>
                        :
                        ""
                    }
                    {
                        (infosCar.icon === true) ?
                        <TfiAngleDown className="animate-bounce text-lg absolute bottom-0 origin-center"/>
                        :
                        ""
                    } 
                </motion.div>
            </div> 
        </motion.div>
    )
}

export default Wrapper;