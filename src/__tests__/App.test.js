/*import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";

test("renders the <NavBar /> component", () => {
  const { container } = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(container.querySelector(".navbar")).toBeInTheDocument();
});

test('renders the Home component using the <Route path="/">', () => {
  window.history.pushState({}, "", "/");
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.queryByText(/Home Page/g)).toBeInTheDocument();
});

test('renders the Actors component using the <Route path="/actors">', () => {
  window.history.pushState({}, "", "/actors");
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.queryByText(/Actors Page/g)).toBeInTheDocument();
});

test('renders the Directors component using the <Route path="/directors">', () => {
  window.history.pushState({}, "", "/directors");
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.queryByText(/Directors Page/g)).toBeInTheDocument();
});

test('renders the Movies component using the <Route path="/movies">', () => {
  window.history.pushState({}, "", "/movies");
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(screen.queryByText(/Movies Page/g)).toBeInTheDocument();
});*/






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

