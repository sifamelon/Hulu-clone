import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FiThumbsUp } from "react-icons/fi";
const Tvshow = ({ sec }) => {
  const [Movies, setMovies] = useState([]);
  useEffect(() => {
    getmovie();
  });
  async function getmovie() {
    try {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${sec}?api_key=988353d8e15a146fa8bcf60dc2e8451e&language=en-US&page=1`
        )
        .then((res) => {
          setMovies(res.data.results);
          console.log(res.data.results);
        });
    } catch (e) {
      console.log(e);
    }
  }
  let nice = useRef("https://image.tmdb.org/t/p/w500/");
  return (
    <div>
      <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 2xl:flex flex-wrap justify-center">
        {Movies.map((res) => (
          <div
            className="p-2 group cursor-pointer transition ease-in-out sm:hover:scale-105 hover:z-50"
            key={res.id}
          >
            {res.poster_path ? (
              <img
                width={1920}
                height={1080}
                src={`${nice.current}${res.backdrop_path}`}
                alt="Movie image"
              />
            ) : null}

            <div className="p-2">
              <p className="truncate max-w-md">{res.overview}</p>
              <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
                {res.original_title}
              </h2>
              <p className="flex items-center opacity-0 group-hover:opacity-100">
                {res.media_type} {res.release_date}
                <FiThumbsUp className="h-5 mx-2" />
                {res.vote_count}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tvshow;
