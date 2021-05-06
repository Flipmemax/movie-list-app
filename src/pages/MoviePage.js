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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {movieData ? (
        <div>
          <h2>
            {movieData.Title} ({movieData.Year})
          </h2>

          {/* <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              border: "1px solid black",
              textAlign: "left",
            }}
          > */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            <div>
              <img alt={movieData.Title} src={movieData.Poster} />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                minWidth: "50vw",
                maxWidth: "70vw",
              }}
            >
              <div
                style={{
                  backgroundColor: "darkgray",
                  color: "white",
                }}
              >
                <h3 style={{ paddingLeft: 20, paddingRight: 20 }}>Director</h3>
              </div>
              <p style={{ paddingLeft: 20, paddingRight: 20 }}>
                {movieData.Director}
              </p>
              <div
                style={{
                  backgroundColor: "darkgray",
                  color: "white",
                }}
              >
                <h3 style={{ paddingLeft: 20, paddingRight: 20 }}>Cast</h3>
              </div>
              <p style={{ paddingLeft: 20, paddingRight: 20 }}>
                {movieData.Actors}
              </p>
              <div
                style={{
                  backgroundColor: "darkgray",
                  color: "white",
                }}
              >
                <h3 style={{ paddingLeft: 20, paddingRight: 20 }}>Language</h3>
              </div>
              <p style={{ paddingLeft: 20, paddingRight: 20 }}>
                {movieData.Language}
              </p>
              <div
                style={{
                  backgroundColor: "darkgray",
                  color: "white",
                }}
              >
                <h3 style={{ paddingLeft: 20, paddingRight: 20 }}>Plot</h3>
              </div>
              <p style={{ paddingLeft: 20, paddingRight: 20 }}>
                {movieData.Plot}
              </p>
              <div
                style={{
                  backgroundColor: "darkgray",
                  color: "white",
                }}
              >
                <h3 style={{ paddingLeft: 20, paddingRight: 20 }}>
                  IMDB Rating
                </h3>
                <p style={{ paddingLeft: 20, paddingRight: 20 }}>
                  {movieData.imdbRating}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // </div>
        <p>Loading....</p>
      )}
    </div>
  );
}
