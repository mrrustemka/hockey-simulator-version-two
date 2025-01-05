import { Teams } from "../types";
import ceb from "../../Images/elh_ceb.png";
import ceb_1 from "../../Images/Gallery/Elh/Ceb/ceb_1.jpg";
import ceb_2 from "../../Images/Gallery/Elh/Ceb/ceb_2.jpg";
import ceb_3 from "../../Images/Gallery/Elh/Ceb/ceb_3.jpg";
import ceb_4 from "../../Images/Gallery/Elh/Ceb/ceb_4.jpg";
import kla from "../../Images/elh_kla.png";
import kla_1 from "../../Images/Gallery/Elh/Kla/kla_1.jpg";
import kla_2 from "../../Images/Gallery/Elh/Kla/kla_2.jpg";
import kla_3 from "../../Images/Gallery/Elh/Kla/kla_3.jpg";
import kom from "../../Images/elh_kom.png";
import kom_1 from "../../Images/Gallery/Elh/Kom/kom_1.jpg";
import kom_2 from "../../Images/Gallery/Elh/Kom/kom_2.jpeg";
import kom_3 from "../../Images/Gallery/Elh/Kom/kom_3.jpg";
import kva from "../../Images/elh_kva.png";
import kva_1 from "../../Images/Gallery/Elh/Kva/kva_1.jpg";
import kva_2 from "../../Images/Gallery/Elh/Kva/kva_2.jpg";
import kva_3 from "../../Images/Gallery/Elh/Kva/kva_3.jpg";
import kva_4 from "../../Images/Gallery/Elh/Kva/kva_4.jpg";
import kva_5 from "../../Images/Gallery/Elh/Kva/kva_4.jpg";
import lib from "../../Images/elh_lib.png";
import lib_1 from "../../Images/Gallery/Elh/Lib/lib_1.jpg";
import lib_2 from "../../Images/Gallery/Elh/Lib/lib_2.jpg";
import lib_3 from "../../Images/Gallery/Elh/Lib/lib_3.jpg";
import lit from "../../Images/elh_lit.png";
import lit_1 from "../../Images/Gallery/Elh/Lit/lit_1.jpg";
import lit_2 from "../../Images/Gallery/Elh/Lit/lit_2.jpg";
import lit_3 from "../../Images/Gallery/Elh/Lit/lit_3.jpg";
import lit_4 from "../../Images/Gallery/Elh/Lit/lit_4.jpg";
import mbl from "../../Images/elh_mbl.png";
import mbl_1 from "../../Images/Gallery/Elh/Mbl/mbl_1.jpg";
import mbl_2 from "../../Images/Gallery/Elh/Mbl/mbl_2.jpg";
import mbl_3 from "../../Images/Gallery/Elh/Mbl/mbl_3.jpg";
import mbl_4 from "../../Images/Gallery/Elh/Mbl/mbl_4.jpg";
import mhk from "../../Images/elh_mhk.png";
import mhk_1 from "../../Images/Gallery/Elh/Mhk/mhk_1.jpg";
import mhk_2 from "../../Images/Gallery/Elh/Mhk/mhk_2.jpg";
import mhk_3 from "../../Images/Gallery/Elh/Mhk/mhk_3.jpg";
import mhk_4 from "../../Images/Gallery/Elh/Mhk/mhk_4.jpg";
import olo from "../../Images/elh_olo.png";
import olo_1 from "../../Images/Gallery/Elh/Olo/olo_1.jpg";
import olo_2 from "../../Images/Gallery/Elh/Olo/olo_2.jpg";
import olo_3 from "../../Images/Gallery/Elh/Olo/olo_3.jpg";
import pce from "../../Images/ehl_pce.png";
import pce_1 from "../../Images/Gallery/Elh/Pce/pce_1.jpg";
import pce_2 from "../../Images/Gallery/Elh/Pce/pce_2.jpg";
import pce_3 from "../../Images/Gallery/Elh/Pce/pce_3.jpg";
import pce_4 from "../../Images/Gallery/Elh/Pce/pce_4.jpg";
import pce_5 from "../../Images/Gallery/Elh/Pce/pce_5.jpg";
import plz from "../../Images/elh_plz.png";
import plz_1 from "../../Images/Gallery/Elh/Plz/plz_1.jpg";
import plz_2 from "../../Images/Gallery/Elh/Plz/plz_2.jpg";
import plz_3 from "../../Images/Gallery/Elh/Plz/plz_3.jpg";
import spa from "../../Images/ehl_spa.png";
import spa_1 from "../../Images/Gallery/Elh/Spa/spa_1.jpg";
import spa_2 from "../../Images/Gallery/Elh/Spa/spa_2.jpg";
import spa_3 from "../../Images/Gallery/Elh/Spa/spa_3.jpg";
import spa_4 from "../../Images/Gallery/Elh/Spa/spa_4.jpg";
import tri from "../../Images/elh_tri.png";
import tri_1 from "../../Images/Gallery/Elh/Tri/tri_1.jpg";
import tri_2 from "../../Images/Gallery/Elh/Tri/tri_2.jpg";
import tri_3 from "../../Images/Gallery/Elh/Tri/tri_3.jpg";
import tri_4 from "../../Images/Gallery/Elh/Tri/tri_4.jpg";
import vit from "../../Images/elh_vit.png";
import vit_1 from "../../Images/Gallery/Elh/Vit/vit_1.jpg";
import vit_2 from "../../Images/Gallery/Elh/Vit/vit_2.jpg";
import vit_3 from "../../Images/Gallery/Elh/Vit/vit_3.jpg";
import vit_4 from "../../Images/Gallery/Elh/Vit/vit_4.jpg";

export const elh: Teams[] = [
  {
    id: 1,
    name: "HC Dynamo",
    abbreviation: "PCE",
    country: "CZE",
    city: "Pardubice",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: pce,
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
    photos: [pce_1, pce_2, pce_3, pce_4, pce_5]
  },
  {
    id: 2,
    name: "HC Sparta",
    abbreviation: "SPA",
    country: "CZE",
    city: "Praha",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: spa,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#1f58ad",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [spa_1, spa_2, spa_3, spa_4]
  },
  {
    id: 3,
    name: "HC Oceláři",
    abbreviation: "TRI",
    country: "CZE",
    city: "Třinec",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: tri,
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
    photos: [tri_1, tri_2, tri_3, tri_4]
  },
  {
    id: 4,
    name: "HC Kometa Brno",
    abbreviation: "KOM",
    country: "CZE",
    city: "Brno",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 96,
    game_counter: 0,
    logo: kom,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#004687",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [kom_1, kom_2, kom_3]
  },
  {
    id: 5,
    name: "HC Motor České Budějovice",
    abbreviation: "CEB",
    country: "CZE",
    city: "České Budějovice",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 93,
    game_counter: 0,
    logo: ceb,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ee1c25",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [ceb_1, ceb_2, ceb_3, ceb_4]
  },
  {
    id: 6,
    name: "Mountfield HK",
    abbreviation: "MHK",
    country: "CZE",
    city: "Hradec Kralove",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 92,
    game_counter: 0,
    logo: mhk,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#cda961",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [mhk_1, mhk_2, mhk_3, mhk_4]
  },
  {
    id: 7,
    name: "Bílí Tygři Liberec",
    abbreviation: "LIB",
    country: "CZE",
    city: "Liberec",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 92,
    game_counter: 0,
    logo: lib,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#00a4e8",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [lib_1, lib_2, lib_3]
  },
  {
    id: 8,
    name: "HC Vítkovice Ridera",
    abbreviation: "VIT",
    country: "CZE",
    city: "Ostrava",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 81,
    game_counter: 0,
    logo: vit,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#15377e",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [vit_1, vit_2, vit_3, vit_4]
  },
  {
    id: 9,
    name: "HC Olomouc",
    abbreviation: "OLO",
    country: "CZE",
    city: "Olomouc",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 76,
    game_counter: 0,
    logo: olo,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ff0000",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [olo_1, olo_2, olo_3]
  },
  {
    id: 10,
    name: "HC Litvínov",
    abbreviation: "LIT",
    country: "CZE",
    city: "Litvínov",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 74,
    game_counter: 0,
    logo: lit,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#ffcc00",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [lit_1, lit_2, lit_3, lit_4]
  },
  {
    id: 11,
    name: "HC Energie Karlovy Vary",
    abbreviation: "KVA",
    country: "CZE",
    city: "Karlovy Vary",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 68,
    game_counter: 0,
    logo: kva,
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
    photos: [kva_1, kva_2, kva_3, kva_4, kva_5]
  },
  {
    id: 12,
    name: "HC Škoda",
    abbreviation: "PLZ",
    country: "CZE",
    city: "Plzeň",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 65,
    game_counter: 0,
    logo: plz,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#26539d",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [plz_1, plz_2, plz_3]
  },
  {
    id: 13,
    name: "BK Mladá Boleslav",
    abbreviation: "MBL",
    country: "CZE",
    city: "Mladá Boleslav",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 61,
    game_counter: 0,
    logo: mbl,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#25a539",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [mbl_1, mbl_2, mbl_3, mbl_4]
  },
  {
    id: 14,
    name: "Rytíři Kladno",
    abbreviation: "KLA",
    country: "CZE",
    city: "Kladno",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 50,
    game_counter: 0,
    logo: kla,
    loses: 0,
    loses_ot: 0,
    wins: 0,
    play_off_rank: 0,
    play_off_round_wins: 0,
    color: "#6993cd",
    isPlayOff: false,
    status: "",
    curStatusLength: 0,
    chartData: [],
    chartLabels: [],
    photos: [kla_1, kla_2, kla_3]
  }
];
