import { Link } from "react-router-dom";

export default function MovieItem({ movie }) {
  return (
    <div
      style={{
        border: "2px solid black",
        margin: 20,
        width: 400,
      }}
    >
      <h3 style={{ padding: 20 }}>{movie.Title}</h3>
      <h5>IMDB ID:</h5>
      <p>{movie.imdbID}</p>
      <Link to={`/movie/${movie.imdbID}`}>
        {/* <br /> (IMDB ID: {movie.imdbID}) */}
        <img src={movie.Poster} alt={movie.Title} style={{ padding: 20 }} />
      </Link>
    </div>
  );
}
