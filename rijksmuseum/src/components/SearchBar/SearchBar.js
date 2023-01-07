import "./SearchBar.css";

const SearchBar = (props) =>{

    const search = (e) =>{
        e.preventDefault();
        const inputFromUser = e.target[0].value;

        const inputToUpperCase = inputFromUser.split(" ").map((word) => word === "van" || word === "der" ? word : word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
        console.log(inputToUpperCase)
        const convertSpaces = inputToUpperCase.replace(/ /g,"+");
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