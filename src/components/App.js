import React from "react";
import NavBar from "./NavBar.js";
import Home from "./Home.js";
import About from "./About.js";
import user from "../data/user";
// pass this data down as props to the child component(s) that need it!

console.log('User:', user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color}/>
      <About bio={user.bio} git={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}

export default App;
