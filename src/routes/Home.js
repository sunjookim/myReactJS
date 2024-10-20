// Home routes

// import Button from "./Button";
// import styles from "./App.module.css";
import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
      await fetch( // .then 말고 요즘엔 async - await를 쓴다.
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    
    setMovies(json.data.movies);
    setLoading(false);    
  };

  useEffect(() => {
    getMovies()
  }, []);
  console.log(movies);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie 
              key={movie.id} // map안에서 component들을 render할 때 사용
              id={movie.id}
              coverImg={movie.medium_cover_image} // props
              title={movie.title} 
              summary={movie.summary} 
              genres={movie.genres} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;