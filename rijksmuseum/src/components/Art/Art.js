import "./Art.css";

const Art = ({art}) =>{
    return(
        <article className="art">
            <figure className="art__imgContainer">
                <img src={art.webImage.url} alt="" className="art__background" draggable="false"/>
            </figure>
            <div className="art__fade">
                <section className="art__shortDescription">
                    <h1 className="art__title">{art.title}</h1>
                    <p className="art__painter">{art.principalOrFirstMaker}</p>
                </section>
            </div>
        </article>
    )
}

export default Art;