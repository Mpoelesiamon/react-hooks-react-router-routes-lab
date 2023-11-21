/*import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";

function App() {
  return <div>{/*{code here}*}</div>;
}

export default App;*/





import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import Movies from './Movies';
import Directors from './Directors';
import Actors from './Actors';

const App = () => {
  return (
    <div>
      <NavBar />
      <Route path="/movies" component={Movies} />
      <Route path="/directors" component={Directors} />
      <Route path="/actors" component={Actors} />
      <Route exact path="/" component={Home} />
    </div>
  );
};

export default App;
