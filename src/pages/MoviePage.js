import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MoviePage() {
  const { imdbID } = useParams();
  const [movieData, setMovieData] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://omdbapi.com/?i=${imdbID}&apikey=f97e167d`
        );

        setMovieData(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [imdbID]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {movieData ? (
        <div
          style={{
            border: "2px solid black",
            width: "50vw",
          }}
        >
          <h2>{movieData.Title}</h2>
          <div className="details">
            <img alt={movieData.Title} src={movieData.Poster} />
            <div>
              <h3>Director</h3>
              <p>{movieData.Director}</p>
              <h3>Cast</h3>
              <p>{movieData.Actors}</p>
              <h3>Language</h3>
              <p>{movieData.Language}</p>
              <h3>Plot</h3>
              <p style={{ paddingLeft: 50, paddingRight: 50 }}>
                {movieData.Plot}
              </p>
              <h3>IMDB Rating</h3>
              <p>{movieData.imdbRating}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading....</p>
      )}
    </div>
  );
}
