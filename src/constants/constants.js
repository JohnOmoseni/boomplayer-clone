import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";

export const navLinks = [
  {
    title: "Music",
    to: "/music",
    icon: HiOutlineHome,
  },
  {
    title: "Library",
    to: "/library",
    icon: HiOutlineHome,
  },
  {
    title: "Account",
    to: "/account",
    icon: HiOutlineHome,
  },
];

export const musicLinks = [
  {
    title: "Charts",
    link: "top-charts",
    icon: HiOutlineHashtag,
  },
  {
    title: "Genres",
    link: "genres",
    icon: HiOutlinePhotograph,
  },
  {
    title: "Artists",
    link: "artists",
    icon: HiOutlineUserGroup,
  },
  {
    title: "Playlists",
    link: "playlist",
    icon: HiOutlinePhotograph,
  },
];
