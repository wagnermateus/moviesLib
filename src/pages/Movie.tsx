import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import "./Movie.css";
import { MovieCard } from "../components/MovieCard";
const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
export const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<any[]>([]);
  const formatCurrency = (number: string)=>{
    return parseInt(number).toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
    });
  };
  const getMovie = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };
  useEffect(()=>{
    const movieURL = `${moviesURL}${id}?${apiKey}`
    getMovie(movieURL);
    
  },[])
  return (
    <div className="movie-page">
     {movie &&
     <>
     <MovieCard movie={movie}/>
     <p className="tagline">{movie.tagline}</p>
     <div className="info">
        <h3>
            <BsWallet2/>Orçamento:
        </h3>
        <p>{formatCurrency(movie.budget)}</p> 
     </div>
     <div className="info">
        <h3>
            <BsGraphUp/>Receita:
        </h3>
        <p>{formatCurrency(movie.revenue)}</p> 
     </div>
     <div className="info">
        <h3>
            <BsHourglassSplit/>Duração:
        </h3>
        <p>{movie.runtime} minutos</p> 
     </div>
     <div className="info description">
        <h3>
            <BsFillFileEarmarkTextFill/>Descrição:
        </h3>
        <p>{movie.overview}</p> 
     </div>
     </>
     
     }
      
    </div>
  );
};
