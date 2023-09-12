import './App.css';
import Events from './components/events';
import Navbar from './components/navbar';

function App() {
  return (
    <>
    <div className="navbar">
      <Navbar /> </div>
      <div className="App">
    <h1>Eventonica App</h1>
    <div className="App-header">
  <Events />
  </div>
  </div>
</>
  )
  
}

export default App
