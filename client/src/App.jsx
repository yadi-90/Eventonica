import './App.css';
import Events from './components/events';
import Navbar from './components/navbar';
import SearchBox from './components/searchbox';
import EventCard from './components/event';


function App() {
  return (
    <>
    <div className="navbar">
      <Navbar /> </div>
      <div className="Title">
        <img src="images/eventonica logo.png" height="400px" width="400px"></img>
    <h1>Event Managment</h1>
    </div>
    <div className="Events">
      <SearchBox /></div>
    <div className="App">
  <Events />
  </div>
</>
  ); 
}

export default App
