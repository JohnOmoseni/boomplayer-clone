import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: headers => {
      headers.set("X_RAPIDAPI_KEY", "60128ebf30msh8f1f6e2da0491d6p151b06jsn9ef08e64d149");

      return headers;
    },
  }),
  endpoints: builder => ({
    getWorldCharts: builder.query({
      query: () => `/charts/world`,
    }),
    getSongDetails: builder.query({
      query: songid => `/tracks/details?track_id=${songid}`,
    }),
    getSongsRelated: builder.query({
      query: songid => `/tracks/related?track_id=${songid}`,
    }),
    getArtisteDetails: builder.query({
      query: artisteid => `/artists/details?artist=${artisteid}`,
    }),
    getSongsByCountry: builder.query({
      query: (countryCode = "NGN") => `/charts/country?country_code=${countryCode}`,
    }),
    getSongsByGenre: builder.query({
      query: genre => `/charts/genre-world?genre_code=${genre}`,
    }),
    getSongsBySearch: builder.query({
      query: searchTerm => `/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`,
    }),
  }),
});

export const {
  useGetWorldChartsQuery,
  useGetSongDetailsQuery,
  useGetSongsRelatedQuery,
  useGetArtisteDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery,
} = shazamApi;
