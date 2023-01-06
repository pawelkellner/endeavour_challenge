import "./SearchBar.css";

const SearchBar = (props) =>{

    const search = (e) =>{
        e.preventDefault();
        const convertSpaces = e.target[0].value.replace(/ /g,"+");
        props.submit(convertSpaces)
    }

    return(
        <section className="searchBar">
            <form onSubmit={search} action="" className="searchBar__form">
                <input type="text" className="searchBar__input" placeholder="Rembrandt....."/>
                <i className="fa-solid fa-magnifying-glass searchBar__icon"></i>
            </form>
        </section>
    )
}

export default SearchBar;