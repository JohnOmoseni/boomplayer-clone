import React, { Suspense } from "react";
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

function Boomplayer() {
  return (
    <>
      <div className="wrapper-body">
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<Navigate to="/music" />} />
            <Route path="/music">
              <Route index element={<Home />} />
              <Route path="top-charts" element={<TopCharts />} />
              <Route path="genres" element={<GenresList />} />
              <Route path="genres/:genre" element={<Genre />} />
              <Route path="artists" element={<ArtistsList />} />
              <Route path="artiste-details/:id" element={<ArtisteDetails />} />
              <Route path="playlist" element={<Home />} />
            </Route>

            <Route path="/search" element={<Search />} />

            <Route path="/library" element={<Library />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </>
  );
}

export default Boomplayer;
