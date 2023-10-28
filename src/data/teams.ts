import { Teams } from "./types";
import aik from "../images/aik.png";
import fro from "../images/fro.png";
import lak from "../images/lak.png";
import ore from "../images/ore.png";
import gen from "../images/gen.png";
import hcb from "../images/hcb.png";
import zsc from "../images/zsc.png";
import scb from "../images/scb.png";
import tap from "../images/tap.png";
import pel from "../images/pel.png";
import ifk from "../images/ifk.png";
import ilv from "../images/ilv.png";
import rbm from "../images/rbm.png";
import man from "../images/man.png";
import deg from "../images/deg.png";
import kec from "../images/kec.png";

export const teams: Teams[] = [
  {
    id: 1,
    name: "Lakers",
    abbreviation: "LAK",
    country: "Swe",
    city: "Vaxjo",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    stadiumCapacity: 5750,
    games: [],
    game_counter: 0,
    logo: lak,
    background_color: "#f47734",
    sheet_background_color: "swe",
  },
  {
    id: 2,
    name: "AIK",
    abbreviation: "AIK",
    country: "Swe",
    city: "Skelleftea",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    stadiumCapacity: 6001,
    games: [],
    game_counter: 0,
    logo: aik,
    background_color: "#010101",
    sheet_background_color: "swe",
  },
  {
    id: 3,
    name: "Orebro Hockey",
    abbreviation: "ORE",
    country: "Swe",
    city: "Orebro",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    stadiumCapacity: 5150,
    games: [],
    game_counter: 0,
    logo: ore,
    background_color: "#ffffff",
    sheet_background_color: "swe",
  },
  {
    id: 4,
    name: "Frolunda HC",
    abbreviation: "FRO",
    country: "Swe",
    city: "Frolunda",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    stadiumCapacity: 12044,
    games: [],
    game_counter: 0,
    logo: fro,
    background_color: "#c90210",
    sheet_background_color: "swe",
  },
  {
    id: 5,
    name: "Geneve Servette HC",
    abbreviation: "GEN",
    country: "Swi",
    city: "Geneva",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    stadiumCapacity: 7135,
    games: [],
    game_counter: 0,
    logo: gen,
    background_color: "#990012",
    sheet_background_color: "swi",
  },
  {
    id: 6,
    name: "EHC Biel-Bienne",
    abbreviation: "HCB",
    country: "Swi",
    city: "Biel",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    stadiumCapacity: 6521,
    games: [],
    game_counter: 0,
    logo: hcb,
    background_color: "#f7cc16",
    sheet_background_color: "swi",
  },
  {
    id: 7,
    name: "ZSC LIONS",
    abbreviation: "ZSC",
    country: "Swi",
    city: "Zurich",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    stadiumCapacity: 12000,
    games: [],
    game_counter: 0,
    logo: zsc,
    background_color: "#e70003",
    sheet_background_color: "swi",
  },
  {
    id: 8,
    name: "SC BERN",
    abbreviation: "SCB",
    country: "Swi",
    city: "Bern",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 66,
    stadiumCapacity: 17031,
    games: [],
    game_counter: 0,
    logo: scb,
    background_color: "#000000",
    sheet_background_color: "swi",
  },
  {
    id: 9,
    name: "Tappara",
    abbreviation: "TAP",
    country: "Fin",
    city: "Tampere",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    stadiumCapacity: 13455,
    games: [],
    game_counter: 0,
    logo: tap,
    background_color: "#ffffff",
    sheet_background_color: "fin",
  },
  {
    id: 10,
    name: "Pelicans",
    abbreviation: "PEL",
    country: "Fin",
    city: "Lahti",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    stadiumCapacity: 5371,
    games: [],
    game_counter: 0,
    logo: pel,
    background_color: "#e6e6e6",
    sheet_background_color: "fin",
  },
  {
    id: 11,
    name: "HIFK",
    abbreviation: "IFK",
    country: "Fin",
    city: "Helsinki",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    stadiumCapacity: 8200,
    games: [],
    game_counter: 0,
    logo: ifk,
    background_color: "#b30210",
    sheet_background_color: "fin",
  },
  {
    id: 12,
    name: "Ilves",
    abbreviation: "ILV",
    country: "Fin",
    city: "Tampere",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    stadiumCapacity: 13400,
    games: [],
    game_counter: 0,
    logo: ilv,
    background_color: "#000000",
    sheet_background_color: "fin",
  },
  {
    id: 13,
    name: "EHC Red Bull",
    abbreviation: "RBM",
    country: "Ger",
    city: "Munich",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    stadiumCapacity: 6256,
    games: [],
    game_counter: 0,
    logo: rbm,
    background_color: "#000080",
    sheet_background_color: "ger",
  },
  {
    id: 14,
    name: "Adler",
    abbreviation: "MAN",
    country: "Ger",
    city: "Mannheim",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    stadiumCapacity: 13600,
    games: [],
    game_counter: 0,
    logo: man,
    background_color: "#ffffff",
    sheet_background_color: "ger",
  },
  {
    id: 15,
    name: "Dusseldorf EG",
    abbreviation: "DEG",
    country: "Ger",
    city: "Dusseldorf",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 66,
    stadiumCapacity: 13205,
    games: [],
    game_counter: 0,
    logo: deg,
    background_color: "#f6d12a",
    sheet_background_color: "ger",
  },
  {
    id: 16,
    name: "Kolner Haie",
    abbreviation: "KEC",
    country: "Ger",
    city: "Koln",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 66,
    stadiumCapacity: 18700,
    games: [],
    game_counter: 0,
    logo: kec,
    background_color: "#e30613",
    sheet_background_color: "ger",
  },
];
