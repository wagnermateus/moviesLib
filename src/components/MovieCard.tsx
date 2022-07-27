import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Movie } from "../pages/Movie";

const imgURL = import.meta.env.VITE_IMG;

interface movieCardProps { 
  showLink: boolean;
  movie: {
    poster_path: string;
    title: string;
    vote_average: string;
    id:string;
  };
}
export const MovieCard = (props: movieCardProps) => {
  return (
    <div className="movie-card">
      <img src={imgURL + props.movie.poster_path} alt={props.movie.title}></img>
      <h2>{props.movie.title}</h2>
      <p>
        <FaStar/>{props.movie.vote_average}
      </p>
      {props.showLink && <Link to={`/movie/${props.movie.id}`}>Detalhes</Link>}
    </div>
  );
};
