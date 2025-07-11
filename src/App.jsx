import React from "react";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div>
      <Contact
        avatar="https://randomuser.me/api/portraits/men/28.jpg"
        name="John"
        email="textuser@gmail.com"
        number="+(74) 494478948"
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/8.jpg"
        name="Riya"
        email="user@gmail.com"
        number="+(74) 785474948"
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/men/18.jpg"
        name="Simon"
        email="user2@gmail.com"
        number="+(74) 895474948"
      />
      <Contact
        avatar="https://randomuser.me/api/portraits/women/19.jpg"
        name="Christina"
        email="user4@gmail.com"
        number="+(91) 67474948"
      />
    </div>
  );
};

export default App;
