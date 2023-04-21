import { BsMusicNoteBeamed, BsFillBarChartFill, BsSoundwave, BsMic } from "react-icons/bs";
import { MdManageAccounts } from "react-icons/md";
import { TiThList } from "react-icons/ti";

export const navLinks = [
  {
    title: "Music",
    to: "/music",
    icon: BsMusicNoteBeamed,
  },
  {
    title: "Library",
    to: "/library",
    icon: TiThList,
  },
  {
    title: "Account",
    to: "/account",
    icon: MdManageAccounts,
  },
];

export const musicLinks = [
  {
    title: "Charts",
    link: "top-charts",
    icon: BsFillBarChartFill,
  },
  {
    title: "Genres",
    link: "genres",
    icon: BsSoundwave,
  },
  {
    title: "Artists",
    link: "artists",
    icon: BsMic,
  },
];
