export const genres = [
  { title: "Pop", value: "POP" },
  { title: "Hip-Hop", value: "HIP_HOP_RAP" },
  { title: "Dance", value: "DANCE" },
  { title: "Electronic", value: "ELECTRONIC" },
  { title: "Soul", value: "SOUL_RNB" },
  { title: "Alternative", value: "ALTERNATIVE" },
  { title: "Rock", value: "ROCK" },
  { title: "Latin", value: "LATIN" },
  { title: "Film", value: "FILM_TV" },
  { title: "Country", value: "COUNTRY" },
  { title: "Worldwide", value: "WORLDWIDE" },
  { title: "Reggae", value: "REGGAE_DANCE_HALL" },
  { title: "House", value: "HOUSE" },
  { title: "K-Pop", value: "K_POP" },
];

const genreNames = {
  detail: [
    {
      loc: ["query", "genre_code"],
      msg: "value is not a valid enumeration member; permitted: 'POP', 'HIP_HOP_RAP', 'DANCE', 'ELECTRONIC', 'SOUL_RNB', 'ALTERNATIVE', 'ROCK', 'LATIN', 'FILM_TV', 'COUNTRY', 'AFRO_BEATS', 'WORLDWIDE', 'REGGAE_DANCE_HALL', 'HOUSE', 'K_POP', 'FRENCH_POP', 'SINGER_SONGWRITER', 'REG_MEXICO'",
      type: "type_error.enum",
      ctx: {
        enum_values: [
          "POP",
          "HIP_HOP_RAP",
          "DANCE",
          "ELECTRONIC",
          "SOUL_RNB",
          "ALTERNATIVE",
          "ROCK",
          "LATIN",
          "FILM_TV",
          "COUNTRY",
          "AFRO_BEATS",
          "WORLDWIDE",
          "REGGAE_DANCE_HALL",
          "HOUSE",
          "K_POP",
          "FRENCH_POP",
          "SINGER_SONGWRITER",
          "REG_MEXICO",
        ],
      },
    },
  ],
};
