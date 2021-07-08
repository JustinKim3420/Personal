import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Overlay from "./components/Overlay";

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
          <h1>This is the Main page</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non
        velit condimentum, eleifend metus varius, pharetra velit. Integer
        efficitur felis vel rhoncus venenatis. Etiam id tellus ut ligula
        ullamcorper facilisis vel et tortor. Fusce dignissim sem a sapien
        iaculis blandit. Praesent nibh mi, egestas eget interdum at, placerat
        vel magna. Sed sem neque, fringilla eget dapibus quis, mollis et neque.
        In pharetra ex sit amet nunc sollicitudin, ac commodo arcu rutrum.
        Vivamus quis volutpat sem, non elementum velit. Nam rhoncus magna magna,
        a ornare ligula condimentum a. Duis blandit nunc quis libero vehicula,
        sit amet imperdiet ante feugiat. Duis sapien urna, porttitor ac lacinia
        at, tempor nec purus. Morbi tincidunt nulla in rhoncus tempor. Sed diam
        tellus, porta in augue id, dignissim aliquet lectus. Cras porttitor
        ultricies leo ut euismod. Proin enim dui, placerat quis cursus vitae,
        tempus a lorem. Mauris neque nibh, auctor nec semper sit amet, gravida
        at mauris. Integer tristique dolor et gravida hendrerit. Ut vitae ligula
        lacus. In ornare odio euismod dui dignissim porta. Vestibulum est orci,
        commodo sed eros et, ullamcorper placerat lectus. Donec placerat dui at
        leo fringilla, nec ultrices urna venenatis. Sed nec laoreet nisi, quis
        efficitur purus. Proin quis tellus pellentesque arcu mollis rutrum. Nam
        maximus ligula et tempus vehicula. Sed sit amet lacus ac massa molestie
        lacinia. Aliquam turpis sapien, blandit ut ipsum quis, pellentesque
        volutpat sapien. Suspendisse potenti. Orci varius natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Nam nec
        ullamcorper ipsum, sed consectetur ante. Nunc ut nisi leo. Integer
        vestibulum risus orci, ut blandit mi bibendum pharetra. Vestibulum sed
        faucibus enim, eget tincidunt elit. Integer viverra, tortor eleifend
        pellentesque elementum, lacus lectus efficitur risus, eget iaculis nulla
        dolor ac metus. Aenean laoreet libero vitae purus congue, eget rhoncus
        mi condimentum. Sed a augue sed tellus rhoncus sodales ac vitae velit.
        Maecenas ipsum nisi, imperdiet non feugiat eu, dictum consequat dui.
        Integer vel gravida lectus. Aliquam eget risus auctor, efficitur erat
        et, vehicula quam. Orci varius natoque penatibus et magnis dis
        parturient montes, nascetur ridiculus mus. Nullam consectetur a magna eu
        maximus. Vestibulum mollis diam condimentum consequat suscipit. Nullam
        sit amet erat id libero ultricies fermentum. Duis suscipit eros quis
        pharetra tincidunt. Etiam quis consectetur magna. Vivamus sit amet
        vestibulum nunc, quis consectetur ligula. Donec malesuada ipsum in
        consequat finibus. Quisque nec velit nec nibh eleifend placerat quis
        quis metus. Sed eget ligula a risus facilisis sagittis at at neque.
        Curabitur volutpat, orci non dapibus varius, nunc ex accumsan ligula, ut
        tristique nulla elit quis est. Vestibulum non elit neque. Duis gravida
        arcu enim, in ultrices odio sollicitudin et. Nunc nec metus turpis. Sed
        ullamcorper, tortor sed hendrerit bibendum, ligula ex condimentum
        libero, vel facilisis eros ipsum non velit. Etiam venenatis elit quis
        nibh volutpat mattis. Aliquam velit nulla, tempor quis egestas vehicula,
        sollicitudin euismod purus. Phasellus et sapien ultrices massa
        condimentum cursus. Suspendisse potenti. Vivamus interdum dui vitae
        fringilla posuere. Integer ut diam ipsum. Suspendisse ac nulla et diam
        tincidunt porta non ac ligula. Nunc pretium purus nec pulvinar bibendum.
        Maecenas venenatis tempor rutrum. Nunc ut sagittis dui. Praesent eu
        eleifend neque. Donec laoreet metus eu nibh cursus rutrum. Sed cursus
        nisl id tortor iaculis pharetra. In euismod, quam ut molestie rutrum, ex
        mauris ultrices libero, quis vestibulum augue purus eu nisl. Aenean at
        sagittis nisi. Suspendisse elit nulla, iaculis quis pulvinar id,
        consectetur quis odio. Etiam eu sem urna. In hac habitasse platea
        dictumst. Curabitur rhoncus blandit nulla, vel imperdiet ex volutpat eu.
        Vivamus et ipsum gravida turpis elementum varius. Praesent at lacinia
        orci, quis laoreet risus. Integer sit amet consectetur erat, id iaculis
        enim. Fusce ut imperdiet ligula, sed ultricies augue. Ut pulvinar dui
        non nunc porttitor, vitae imperdiet arcu iaculis. Integer tempor nisi
        sit amet tortor bibendum dapibus a imperdiet purus. Praesent sodales
        purus nisi, id mattis purus faucibus eu. Sed sed urna sit amet justo
        mattis tempus non a risus. Vivamus vel efficitur neque. Nam vel ligula
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
