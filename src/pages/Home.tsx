import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";

import "./MoviesGrid.css";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

export const Home = () => {
  const [topMovies, setTopMovies] = useState<any[]>([]);
  const getTopMovies = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };
  useEffect(() => {
    const topRatedURL = `${moviesURL}top_rated?${apiKey}`;
    getTopMovies(topRatedURL);
  }, []);
  return (
    <div className="container">
      <h2 className="title">Melhores Filmes:</h2>
      <div className="movies-container">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} showLink={true} />
          ))}
      </div>
    </div>
  );
};
