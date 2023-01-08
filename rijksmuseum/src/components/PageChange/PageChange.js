import "./PageChange.css";

const PageChange = (props) =>{
    return(
        <section className="page">
            <div className="page__counter">
                <p>{props.pageCounter[0]?.value || "loading..."}</p>
            </div>
            <div className="page__arrows">
                <i onClick={props.prevPage} className="fa-solid fa-angle-left page__arrowLeft"></i>
                <i onClick={props.nextPage} className="fa-solid fa-angle-right page__arrowRight"></i>
            </div>
            
        </section>
    );
}

export default PageChange;