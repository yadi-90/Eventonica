import  react from 'react';
import './searchbox.css';

const SearchBox = () => {
    return (
        <div className="container">
            <form action="" className="search">
            <input type="text" placeholder="Search by name/date"></input>
            <button type="submit"><img src="images/search.png" height="20px" ></img></button>
            </form>
        </div>

    )
}       

export default SearchBox;