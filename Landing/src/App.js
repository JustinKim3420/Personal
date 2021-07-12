import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Overlay from "./components/Overlay";
import Homepage from "./components/Homepage";
import SkillBar from './components/SkillBar'

import { Switch, Route , Redirect } from "react-router-dom";

const App = () => {
  const navItems = ["Home", "Projects", "Contacts"];

  const [buttonClicked, setButtonClicked] = useState(false);
  return (
    <div className="container">
      <Navbar
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
        navItems={navItems}
      />
      <Overlay buttonClicked={buttonClicked} setButtonClicked={setButtonClicked} navItems={navItems}/>
      <Switch>
        <Route path='/Home'>
          <Homepage/>
        </Route>
        <Route path='/projects'>
          <h1>These are my current projects</h1>
        </Route>
        <Route path='/Contacts'>
          <h1>Please contact me!</h1>
        </Route>
        <Route path='/'>
          <Redirect to='/Home'/>
        </Route>
      </Switch>
      
    </div>
  );
};

export default App;
