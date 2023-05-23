import logo from "./logo.svg";
// import './App.css';
import react from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import Popular from "./Components/ListProgram/Popular";
import Toprated from "./Components/ListProgram/Toprated";
import Trending from "./Components/ListProgram/Trending";
import Upcoming from "./Components/ListProgram/Upcoming";
import Horror from "./Components/ListProgram/Horror";
import TvPopular from "./Components/ListProgram/TvPopular";
import Tvwestern from "./Components/ListProgram/Tvwestern";
import Romance from "./Components/ListProgram/Romance";
import Mystery from "./Components/ListProgram/Mystery";
import Tvscfi from "./Components/ListProgram/Tvscfi";
const LazyAnimation = react.lazy(() =>
  import("./Components/ListProgram/Animation")
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
