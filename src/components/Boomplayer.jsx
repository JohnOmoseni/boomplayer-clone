import React, { Suspense, useRef, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Footer from "./Layouts/Footer/Footer";
import AllSongs from "./Layouts/Popups/AllSongs";

const Home = React.lazy(() => import("./Pages/Home"));
const Library = React.lazy(() => import("./Pages/Library/Library"));
const Account = React.lazy(() => import("./Pages/Account"));
const Search = React.lazy(() => import("./Search"));

import TopCharts from "./TopCharts";
import ArtisteDetails from "./Artists/ArtisteDetails";
import ArtistsList from "./Artists/ArtistsList";
import Genre from "./Genres//GenreDetails";
import GenresList from "./Genres/GenresList";
import Loader from "./Loader";
import { useGetWorldChartsQuery } from "../redux/features/shazamApiSlice";

function Boomplayer() {
  const { data, isFetching, isError } = useGetWorldChartsQuery();
  const footerRef = useRef();
  const wrapperRef = useRef();

  useEffect(() => {
    if (footerRef.current) {
      const footerHeight = footerRef.current.clientHeight;
      wrapperRef.current.style.setProperty("--footer-height", `${footerHeight + 6}px`);
    }
  }, [footerRef.current]);
  return (
    <>
      <div className="wrapper-body" ref={wrapperRef}>
        <Suspense fallback={<Loader title="Loading..." />}>
          <Routes>
            <Route path="/" element={<Navigate to="/music" />} />
            <Route path="/music">
              <Route index element={<Home />} />
              <Route
                path="top-charts"
                element={<TopCharts data={data} isFetching={isFetching} isError={isError} />}
              />
              <Route path="genres" element={<GenresList />} />
              <Route path="genres/:genre" element={<Genre />} />
              <Route
                path="artists"
                element={<ArtistsList data={data} isFetching={isFetching} isError={isError} />}
              />
              <Route path="artiste-details/:id" element={<ArtisteDetails />} />
            </Route>

            <Route path="/search" element={<Search />} />
            <Route path="/library" element={<Library />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Suspense>
      </div>
      <Footer footerRef={footerRef} />
    </>
  );
}

export default Boomplayer;
