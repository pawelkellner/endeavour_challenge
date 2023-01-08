import "./PaintingCard.css";

/* Framer Motion */
import {motion as m, AnimatePresence} from "framer-motion";

import useFetchPost from "../../useFetchPost";
import { useEffect } from "react";

const PaintingCard = (props) =>{
    const {data, loading, error, refetch} = useFetchPost("");

    useEffect(() =>{
        if(props.artId !== 0){
        refetch(`https://www.rijksmuseum.nl/api/nl/collection/${props.artId}?key=woJOHsSM`)
        }
    }, [props.artId])


    if(loading){
        return;
    }

    if (error) console.log(error);

    console.log(data?.artObject)

    

    return(
        <AnimatePresence>
            {props.paintingWasClicked && (
            <m.article className="painting"
            key="artSlideIn"
            initial={{x: `100%`}}
            animate={{x: 0}}
            transition={{type: "tween", duration: 1}}
            exit={{x: `100%`}}
            >
                <figure className="painting__figure">
                    <img src={data?.artObject?.webImage?.url} alt="" className="painting__img"/>
                </figure>
                <section className="painting__content">
                    <div className="painting__button">
                        <i onClick={props.closePainting} className="fa-solid fa-xmark button"></i>
                    </div>
                    <div className="painting__textWrapper">
                        <div className="painting__titleWrapper">
                            <h1 className="painting__title">{data?.artObject?.longTitle || data?.artObject?.longtitle || "Placeholder Title"}</h1>
                            <h2 className="painting__info">{data?.artObject?.physicalMedium || "Placeholder text"}, {data?.artObject?.subTitle || "placeholder text"}</h2>
                        </div>
                        <p className="painting__description">{data?.artObject?.plaqueDescriptionDutch || data?.artObject?.description || "Placeholder text"}</p>
                    </div>
                </section>
            </m.article>
            )}
        </AnimatePresence>
        
    )
}

export default PaintingCard;