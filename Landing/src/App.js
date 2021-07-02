import React , {useState} from 'react'
import Navbar from './components/Navbar';
import Overlay from "./components/Overlay";

const App = () => {
  const [buttonClicked, setButtonClicked] = useState(false);
  return (
    <div className="container">
      <Navbar buttonClicked={buttonClicked} setButtonClicked={setButtonClicked}/>
      <Overlay buttonClicked={buttonClicked}/>
    </div>
  );
}

export default App;
