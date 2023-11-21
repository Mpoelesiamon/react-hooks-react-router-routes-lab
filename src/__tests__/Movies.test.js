/*import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Movies from "../components/Movies";
import { movies } from "../data";

test("renders without any errors", () => {
  const errorSpy = jest.spyOn(global.console, "error");

  render(<Movies />);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("renders 'Movies Page' inside of a <h1 />", () => {
  render(<Movies />);
  const h1 = screen.queryByText(/Movies Page/g);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("renders each movie's title and time", () => {
  render(<Movies />);
  for (const movie of movies) {
    expect(
      screen.queryByText(movie.title, { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.queryByText(movie.time.toString(), { exact: false })
    ).toBeInTheDocument();
  }
});

test("renders a <li /> for each genre", () => {
  render(<Movies />);
  for (const movie of movies) {
    for (const genre of movie.genres) {
      const li = screen.queryAllByText(genre, { exact: false })[0];
      expect(li).toBeInTheDocument();
      expect(li.tagName).toBe("LI");
    }
  }
});
*/






import React from 'react';
import moviesData from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {moviesData.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <p>Time: {movie.time}</p>
          <ul>
            {movie.genres.map((genre, idx) => (
              <li key={idx}>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
