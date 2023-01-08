import "./Filter.css";

import {motion as m, AnimatePresence} from "framer-motion";
import { useState } from "react";

const Filter = ({data, colorFilter}) =>{
    const [filterClicked, setFilterClicked] = useState(false);
    const findColorsData = data?.find(type => type.name === 'normalized32Colors.hex')

    const renderColors = findColorsData?.facets?.map((type) =>{
        let colorStyles = {
            background: type.key
        }
        return <div onClick={() =>colorFilter(type.key.replace(" ", ""))} className="colorBox" style={colorStyles}></div>
    })

    return(
        <>
        <section onClick={() => setFilterClicked(!filterClicked)} className="filter">
            <h1>Filters</h1>
            <i className="fa-solid fa-caret-down"></i>
        </section>
        <AnimatePresence>
            {filterClicked && (
                <m.section className="filter__dropdown"
                initial={{height: 0, paddingTop: 0}}
                animate={{height: `max-content`, paddingTop: `1.6rem`}}
                transition={{type: "tween", duration: 1 , delay: 0.5 , height: { duration: 1, delay: 0}}}
                exit={{height: 0, paddingTop: 0}}
                >
                    <ul>
                        <li>
                            Kleur
                            <div className="filter__colorsWrapper">
                            {renderColors}
                            </div>
                        </li>
                    </ul>
                </m.section>
            )}
            
        </AnimatePresence>
        
        </>
    );
}

export default Filter;