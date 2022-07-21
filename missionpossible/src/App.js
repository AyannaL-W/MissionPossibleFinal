import Navbar from './Navbar';
import Home from './Home'
import logo from './images/remote.png'

function App() {
  const title = "Welcome to the new blog";
  const likes = 50;

  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
