import { Teams } from "../types";
import aug from "../../Images/del_aug.png";
import aug_1 from "../../Images/Gallery/Del/Aug/aug_1.jpg";
import aug_2 from "../../Images/Gallery/Del/Aug/aug_2.jpg";
import aug_3 from "../../Images/Gallery/Del/Aug/aug_3.jpg";
import aug_4 from "../../Images/Gallery/Del/Aug/aug_4.jpg";
import bhv from "../../Images/del_bhv.png";
import bhv_1 from "../../Images/Gallery/Del/Bhv/bhv_1.jpg";
import bhv_2 from "../../Images/Gallery/Del/Bhv/bhv_2.jpg";
import bhv_3 from "../../Images/Gallery/Del/Bhv/bhv_3.jpg";
import deg from "../../Images/del_deg.png";
import deg_1 from "../../Images/Gallery/Del/Deg/deg_1.jpg";
import deg_2 from "../../Images/Gallery/Del/Deg/deg_2.jpg";
import deg_3 from "../../Images/Gallery/Del/Deg/deg_3.jpg";
import deg_4 from "../../Images/Gallery/Del/Deg/deg_4.jpg";
import ebb from "../../Images/del_ebb.png";
import ebb_1 from "../../Images/Gallery/Del/Ebb/ebb_1.jpg";
import ebb_2 from "../../Images/Gallery/Del/Ebb/ebb_2.jpg";
import ebb_3 from "../../Images/Gallery/Del/Ebb/ebb_3.jpg";
import ebb_4 from "../../Images/Gallery/Del/Ebb/ebb_4.jpg";
import fra from "../../Images/del_fra.png";
import fra_1 from "../../Images/Gallery/Del/Fra/fra_1.jpg";
import fra_2 from "../../Images/Gallery/Del/Fra/fra_2.jpg";
import fra_3 from "../../Images/Gallery/Del/Fra/fra_3.jpg";
import iec from "../../Images/del_iec.png";
import iec_1 from "../../Images/Gallery/Del/Iec/iec_1.jpg";
import iec_2 from "../../Images/Gallery/Del/Iec/iec_2.jpg";
import ing from "../../Images/del_ing.png";
import ing_1 from "../../Images/Gallery/Del/Ing/ing_1.jpg";
import ing_2 from "../../Images/Gallery/Del/Ing/ing_2.jpg";
import ing_3 from "../../Images/Gallery/Del/Ing/ing_3.jpg";
import ing_4 from "../../Images/Gallery/Del/Ing/ing_4.jpg";
import ing_5 from "../../Images/Gallery/Del/Ing/ing_5.jpg";
import kec from "../../Images/ehl_kec.png";
import kec_1 from "../../Images/Gallery/Del/Kec/kec_1.jpg";
import kec_2 from "../../Images/Gallery/Del/Kec/kec_2.jpg";
import kec_3 from "../../Images/Gallery/Del/Kec/kec_3.jpg";
import kec_4 from "../../Images/Gallery/Del/Kec/kec_4.jpg";
import kec_5 from "../../Images/Gallery/Del/Kec/kec_5.jpg";
import man from "../../Images/ehl_man.png";
import man_1 from "../../Images/Gallery/Del/Man/man_1.jpg";
import man_2 from "../../Images/Gallery/Del/Man/man_2.jpg";
import man_3 from "../../Images/Gallery/Del/Man/man_3.jpg";
import man_4 from "../../Images/Gallery/Del/Man/man_4.jpg";
import nit from "../../Images/del_nit.png";
import nit_1 from "../../Images/Gallery/Del/Nit/nit_1.jpg";
import nit_2 from "../../Images/Gallery/Del/Nit/nit_2.jpg";
import nit_3 from "../../Images/Gallery/Del/Nit/nit_3.jpg";
import rbm from "../../Images/ehl_rbm.png";
import rbm_1 from "../../Images/Gallery/Del/Rbm/rbm_1.jpg";
import rbm_2 from "../../Images/Gallery/Del/Rbm/rbm_2.jpg";
import rbm_3 from "../../Images/Gallery/Del/Rbm/rbm_3.jpg";
import rbm_4 from "../../Images/Gallery/Del/Rbm/rbm_4.jpg";
import str from "../../Images/del_str.png";
import str_1 from "../../Images/Gallery/Del/Str/str_1.jpg";
import str_2 from "../../Images/Gallery/Del/Str/str_2.jpg";
import str_3 from "../../Images/Gallery/Del/Str/str_3.jpg";
import sww from "../../Images/del_sww.png";
import sww_1 from "../../Images/Gallery/Del/Sww/sww_1.jpg";
import sww_2 from "../../Images/Gallery/Del/Sww/sww_2.jpg";
import sww_3 from "../../Images/Gallery/Del/Sww/sww_3.jpg";
import sww_4 from "../../Images/Gallery/Del/Sww/sww_4.jpg";
import wob from "../../Images/ehl_wob.png";
import wob_1 from "../../Images/Gallery/Del/Wob/wob_1.jpg";
import wob_2 from "../../Images/Gallery/Del/Wob/wob_2.jpg";
import wob_3 from "../../Images/Gallery/Del/Wob/wob_3.jpg";
import wob_4 from "../../Images/Gallery/Del/Wob/wob_4.jpg";

export const del: Teams[] = [
  {
    id: 1,
    name: "Fischtown Pinguins",
    abbreviation: "BHV",
    country: "GER",
    city: "Bremerhaven",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: bhv,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#000000",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [bhv_1, bhv_2, bhv_3]
  },
  {
    id: 2,
    name: "Eisbären",
    abbreviation: "EBB",
    country: "Ger",
    city: "Berlin",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 96,
    game_counter: 0,
    logo: ebb,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#003366",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [ebb_1, ebb_2, ebb_3, ebb_4]
  },
  {
    id: 3,
    name: "Straubing Tigers",
    abbreviation: "STR",
    country: "GER",
    city: "Straubing",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 88,
    game_counter: 0,
    logo: str,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#6b88d3",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [str_1, str_2, str_3]
  },
  {
    id: 4,
    name: "EHC Red Bull",
    abbreviation: "RBM",
    country: "Ger",
    city: "Munich",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 81,
    game_counter: 0,
    logo: rbm,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#0a1d3d",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [rbm_1, rbm_2, rbm_3, rbm_4]
  },
  {
    id: 5,
    name: "Grizzlies",
    abbreviation: "WOB",
    country: "GER",
    city: "Wolfsburg",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 81,
    game_counter: 0,
    logo: wob,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ec6400",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [wob_1, wob_2, wob_3, wob_4]
  },
  {
    id: 6,
    name: "Schwenninger Wild Wings",
    abbreviation: "SWW",
    country: "GER",
    city: "Schwenningen",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 80,
    game_counter: 0,
    logo: sww,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#e6e6e6",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [sww_1, sww_2, sww_3, sww_4]
  },
  {
    id: 7,
    name: "Adler",
    abbreviation: "MAN",
    country: "Ger",
    city: "Mannheim",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 75,
    game_counter: 0,
    logo: man,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#004e9f",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [man_1, man_2, man_3, man_4]
  },
  {
    id: 8,
    name: "Kolner Haie",
    abbreviation: "KEC",
    country: "Ger",
    city: "Koln",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 73,
    game_counter: 0,
    logo: kec,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#e30613",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [kec_1, kec_2, kec_3, kec_4, kec_5]
  },
  {
    id: 9,
    name: "ERC Ingolstadt",
    abbreviation: "ING",
    country: "GER",
    city: "Ingolstadt",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 69,
    game_counter: 0,
    logo: ing,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#002255",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [ing_1, ing_2, ing_3, ing_4, ing_5]
  },
  {
    id: 10,
    name: "Nurnberg Ice Tigers",
    abbreviation: "NIT",
    country: "GER",
    city: "Nurnberg",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 66,
    game_counter: 0,
    logo: nit,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ffffff",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [nit_1, nit_2, nit_3]
  },
  {
    id: 11,
    name: "Dusseldorf EG",
    abbreviation: "DEG",
    country: "Ger",
    city: "Dusseldorf",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 58,
    game_counter: 0,
    logo: deg,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#e20018",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [deg_1, deg_2, deg_3, deg_4]
  },
  {
    id: 12,
    name: "Lowen Frankfurt",
    abbreviation: "FRA",
    country: "GER",
    city: "	Frankfurt",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 55,
    game_counter: 0,
    logo: fra,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#b0baba",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [fra_1, fra_2, fra_3]
  },
  {
    id: 13,
    name: "Iserlohn Roosters",
    abbreviation: "IEC",
    country: "GER",
    city: "Iserlohn",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 58,
    game_counter: 0,
    logo: iec,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#003399",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [iec_1, iec_2]
  },
  {
    id: 14,
    name: "Augsburger Panther",
    abbreviation: "AUG",
    country: "GER",
    city: "Augsburg",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 50,
    game_counter: 0,
    logo: aug,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ffffff",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [aug_1, aug_2, aug_3, aug_4]
  }
];
