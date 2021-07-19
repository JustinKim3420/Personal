import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Overlay from "./components/Overlay";
import Homepage from "./components/Homepage";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

import { Switch, Route , Redirect } from "react-router-dom";

const App = () => {
  const navItems = ["Home", "Projects", "Contacts"];

  const [buttonClicked, setButtonClicked] = useState(false);
  return (
    <div className="container" style={{position:'relative'}}>
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
          <Projects />
        </Route>
        <Route path='/Contacts'>
          <h1>Please contact me!</h1>
        </Route>
        <Route path='/'>
          <Redirect to='/Home'/>
        </Route>
      </Switch>
      <Footer navItems={navItems}/>
    </div>
  );
};

export default App;
