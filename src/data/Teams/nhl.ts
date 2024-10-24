import { Teams } from "../types";
import edm from "../../Images/nhl_edm.png";
import cal from "../../Images/nhl_cal.png";
import van from "../../Images/nhl_van.png";
import sea from "../../Images/nhl_sea.png";
import sjs from "../../Images/nhl_sjs.png";
import vgs from "../../Images/nhl_vgs.png";
import lak from "../../Images/nhl_lak.png";
import ana from "../../Images/nhl_ana.png";
import col from "../../Images/nhl_col.png";
import chi from "../../Images/nhl_chi.png";
import det from "../../Images/nhl_det.png";
import bos from "../../Images/nhl_bos.png";
import buf from "../../Images/nhl_buf.png";
import car from "../../Images/nhl_car.png";
import fla from "../../Images/nhl_fla.png";
import mtl from "../../Images/nhl_mtl.png";
import ott from "../../Images/nhl_ott.png";
import tor from "../../Images/nhl_tor.png";
import pit from "../../Images/nhl_pit.png";
import nyr from "../../Images/nhl_nyr.png";
import wsh from "../../Images/nhl_wsh.png";
import tbl from "../../Images/nhl_tbl.png";
import nsh from "../../Images/nhl_nsh.png";
import phi from "../../Images/nhl_phi.png";
import stl from "../../Images/nhl_stl.png";
import min from "../../Images/nhl_min.png";
import dal from "../../Images/nhl_dal.png";
import nyi from "../../Images/nhl_nyi.png";
import njd from "../../Images/nhl_njd.png";
import cbj from "../../Images/nhl_cbj.png";
import uta from "../../Images/nhl_uta.png";
import wnp from "../../Images/nhl_wnp.png";
import can from "../../Images/w1_can.png";
import usa from "../../Images/w1_usa.png";

export const nhl: Teams[] = [
  {
    id: 1,
    name: "Oilers",
    abbreviation: "EDM",
    country: "Can",
    city: "Edmonton",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: edm,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#00205b",
    flag: can,
    isPlayOff: false
  },
  {
    id: 2,
    name: "Flames",
    abbreviation: "CAL",
    country: "Can",
    city: "Calgary",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 65,
    game_counter: 0,
    logo: cal,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#c8102e",
    flag: can,
    isPlayOff: false
  },
  {
    id: 3,
    name: "Canucks",
    abbreviation: "VAN",
    country: "Can",
    city: "Vancouver",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 92,
    game_counter: 0,
    logo: van,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#00205b",
    flag: can,
    isPlayOff: false
  },
  {
    id: 4,
    name: "Kraken",
    abbreviation: "SEA",
    country: "USA",
    city: "Seattle",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 70,
    game_counter: 0,
    logo: sea,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#96d8d8",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 5,
    name: "Sharks",
    abbreviation: "SJS",
    country: "USA",
    city: "San Jose",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 55,
    game_counter: 0,
    logo: sjs,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#00617f",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 6,
    name: "Golden Knights",
    abbreviation: "VGS",
    country: "USA",
    city: "Vegas",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 85,
    game_counter: 0,
    logo: vgs,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#333f48",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 7,
    name: "Kings",
    abbreviation: "LAK",
    country: "USA",
    city: "Los Angeles",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 80,
    game_counter: 0,
    logo: lak,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#a2aaad",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 8,
    name: "Ducks",
    abbreviation: "ANA",
    country: "USA",
    city: "Anaheim",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 55,
    game_counter: 0,
    logo: ana,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#cf4520",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 9,
    name: "Avalanche",
    abbreviation: "COL",
    country: "USA",
    city: "Colorado",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 98,
    game_counter: 0,
    logo: col,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#8a2432",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 10,
    name: "Blackhawks",
    abbreviation: "CHI",
    country: "USA",
    city: "Chicago",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 65,
    game_counter: 0,
    logo: chi,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ce1126",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 11,
    name: "Red Wings",
    abbreviation: "DET",
    country: "USA",
    city: "Detroit",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 80,
    game_counter: 0,
    logo: det,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#c8102e",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 12,
    name: "Bruins",
    abbreviation: "BOS",
    country: "USA",
    city: "Boston",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 95,
    game_counter: 0,
    logo: bos,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#000000",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 13,
    name: "Sabres",
    abbreviation: "BUF",
    country: "USA",
    city: "Buffalo",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 70,
    game_counter: 0,
    logo: buf,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#003087",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 14,
    name: "Hurricanes",
    abbreviation: "CAR",
    country: "USA",
    city: "Carolina",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 95,
    game_counter: 0,
    logo: car,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#000000",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 15,
    name: "Panthers",
    abbreviation: "FLA",
    country: "USA",
    city: "Florida",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: fla,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#b9975b",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 16,
    name: "Canadiens",
    abbreviation: "MTL",
    country: "Can",
    city: "Montreal",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 70,
    game_counter: 0,
    logo: mtl,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#a6192e",
    flag: can,
    isPlayOff: false
  },
  {
    id: 17,
    name: "Senators",
    abbreviation: "OTT",
    country: "Can",
    city: "Ottawa",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 70,
    game_counter: 0,
    logo: ott,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#c8102e",
    flag: can,
    isPlayOff: false
  },
  {
    id: 18,
    name: "Maple Leafs",
    abbreviation: "TOR",
    country: "Can",
    city: "Toronto",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 90,
    game_counter: 0,
    logo: tor,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ffffff",
    flag: can,
    isPlayOff: false
  },
  {
    id: 19,
    name: "Penguins",
    abbreviation: "PIT",
    country: "USA",
    city: "Pittsburgh",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 72,
    game_counter: 0,
    logo: pit,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#000000",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 20,
    name: "Rangers",
    abbreviation: "NYR",
    country: "USA",
    city: "New York",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: nyr,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#0033a0",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 21,
    name: "Capitals",
    abbreviation: "WSH",
    country: "USA",
    city: "Washington",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 75,
    game_counter: 0,
    logo: wsh,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ffffff",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 22,
    name: "Lightning",
    abbreviation: "TBL",
    country: "USA",
    city: "Tampa Bay",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 85,
    game_counter: 0,
    logo: tbl,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ffffff",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 23,
    name: "Predators",
    abbreviation: "NSH",
    country: "USA",
    city: "Nashville",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 92,
    game_counter: 0,
    logo: nsh,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ffb81c",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 24,
    name: "Flyers",
    abbreviation: "PHI",
    country: "USA",
    city: "Philadelphia",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 75,
    game_counter: 0,
    logo: phi,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#d24303",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 25,
    name: "Blues",
    abbreviation: "STL",
    country: "USA",
    city: "St. Louis",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 70,
    game_counter: 0,
    logo: stl,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#003087",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 26,
    name: "Wild",
    abbreviation: "MIN",
    country: "USA",
    city: "Minnesota",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 75,
    game_counter: 0,
    logo: min,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#0e4431",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 27,
    name: "Stars",
    abbreviation: "DAL",
    country: "USA",
    city: "Dallas",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: dal,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#00823e",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 28,
    name: "Islanders",
    abbreviation: "NYI",
    country: "USA",
    city: "New York",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 80,
    game_counter: 0,
    logo: nyi,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#f26924",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 29,
    name: "Devils",
    abbreviation: "NJD",
    country: "USA",
    city: "New Jersey",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 85,
    game_counter: 0,
    logo: njd,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#cc0000",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 30,
    name: "Blue Jackets",
    abbreviation: "CBJ",
    country: "USA",
    city: "Columbus",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 60,
    game_counter: 0,
    logo: cbj,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#041e42",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 31,
    name: "HC UTAH",
    abbreviation: "UTA",
    country: "USA",
    city: "Utah",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 70,
    game_counter: 0,
    logo: uta,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ffffff",
    flag: usa,
    isPlayOff: false
  },
  {
    id: 32,
    name: "Jets",
    abbreviation: "WNP",
    country: "Can",
    city: "Winnipeg",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 80,
    game_counter: 0,
    logo: wnp,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#004a98",
    flag: can,
    isPlayOff: false
  }
];
