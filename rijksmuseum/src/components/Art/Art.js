import "./Art.css";

const Art = (props) =>{

    const giveId = () =>{
        props.passId(props.art?.objectNumber)
    }
    return(
        <article onClick={(giveId)} className="art">
            <figure className="art__imgContainer">
                <img src={props.art?.webImage?.url} alt="Image unavailable" className="art__background" draggable="false"/>
            </figure>
            <div className="art__fade">
                <section className="art__shortDescription">
                    <h1 className="art__title">{props.art?.title}</h1>
                    <p className="art__painter">{props.art?.principalOrFirstMaker}</p>
                </section>
            </div>
        </article>
    )
}

export default Art;