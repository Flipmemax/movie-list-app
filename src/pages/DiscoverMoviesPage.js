import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import MovieItem from "../components/MovieItem";

export default function DiscoverMoviesPage() {
  const { searchtext } = useParams();
  const history = useHistory();
  const [searchMovie, setSearchMovie] = useState(searchtext);
  const [state, setState] = useState({ status: "idle" });

  useEffect(() => {
    async function fetchData() {
      if (!searchtext || searchtext === "") {
        setState({ status: "idle" });
        return;
      }

      try {
        setState({ status: "searching" });
        const queryParam = encodeURIComponent(searchtext);

        const response = await axios.get(
          `https://omdbapi.com/?s=${queryParam}&apikey=f97e167d`
        );

        if (response.data.Error) {
          setState({ status: "error" });
        } else {
          setState({ status: "done", data: response.data.Search });
          setSearchMovie("");
        }
      } catch (error) {
        console.log("error searching", error.message);
      }
    }

    fetchData();
  }, [searchtext]);

  const navigateToSearch = (event) => {
    event.preventDefault();
    const routeParam = encodeURIComponent(searchMovie);
    history.push(`/discover/${routeParam}`);
  };

  return (
    <div>
      <h1>Discover some movies!</h1>
      <form onSubmit={navigateToSearch}>
        <input
          type="text"
          placeholder="Search movies"
          defaultValue={searchMovie}
          onChange={(event) => {
            setSearchMovie(event.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      {state.status === "error" && <p>Sorry, no movies found...</p>}
      {state.status === "searching" && <p>Searching...</p>}
      {state.status === "done" && (
        <div>
          <h2>Search results</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              margin: "0 -10px",
            }}
          >
            {state.data.map((movie) => (
              <MovieItem key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
