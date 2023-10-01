import  react from 'react';
import './searchbox.css';

const SearchBox = () => {
    return (
        <div className="container">
            <form action="" className="search">
            <input type="text" placeholder="Search by name/date"></input>
            <button type="submit"><img src="images/search.png" height="20px" ></img></button>
            </form>
            <div className="heart">
            <img src="images/heart (1).png" ></img>
            <h7>Favorite Events</h7>
            </div>
        </div>

    )
}       

export default SearchBox;