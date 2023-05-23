import react from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import Popular from "./Components/ListMovies/Popular";
import Toprated from "./Components/ListMovies/Toprated";
import Trending from "./Components/ListMovies/Trending";
import Upcoming from "./Components/ListMovies/Upcoming";
import Horror from "./Components/ListMovies/Horror";
import TvPopular from "./Components/ListMovies/TvPopular";
import Tvwestern from "./Components/ListMovies/Tvwestern";
import Romance from "./Components/ListMovies/Romance";
import Mystery from "./Components/ListMovies/Mystery";
import Tvscfi from "./Components/ListMovies/Tvscfi";
const LazyAnimation = react.lazy(() =>
  import("./Components/ListMovies/Animation")
);
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Upcoming />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top_rated" element={<Toprated />} />
          <Route path="/Trending" element={<Trending />} />
          <Route path="/Horror" element={<Horror />} />
          <Route path="/TV Show" element={<TvPopular />} />
          <Route path="/Western" element={<Tvwestern />} />
          <Route path="/Romance" element={<Romance />} />
          <Route path="/Mystery" element={<Mystery />} />
          <Route path="/SciFi" element={<Tvscfi />} />
          <Route
            path="/Animation"
            element={
              <react.Suspense fallback="loading ....">
                <LazyAnimation />
              </react.Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
