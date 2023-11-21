/*import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Actors from "../components/Actors";
import { actors } from "../data";

test("renders without any errors", () => {
  const errorSpy = jest.spyOn(global.console, "error");

  render(<Actors />);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("renders 'Actors Page' inside of the <h1 />", () => {
  render(<Actors />);
  const h1 = screen.queryByText(/Actors Page/g);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("renders each actor's name", () => {
  render(<Actors />);
  for (const actor of actors) {
    expect(
      screen.queryByText(actor.name, { exact: false })
    ).toBeInTheDocument();
  }
});

test("renders a <li /> for each movie", () => {
  render(<Actors />);
  for (const actor of actors) {
    for (const movie of actor.movies) {
      const li = screen.queryByText(movie, { exact: false });
      expect(li).toBeInTheDocument();
      expect(li.tagName).toBe("LI");
    }
  }
});*/







import React from 'react';
import actorsData from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorsData.map((actor, index) => (
        <div key={index}>
          <h2>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, idx) => (
              <li key={idx}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;

