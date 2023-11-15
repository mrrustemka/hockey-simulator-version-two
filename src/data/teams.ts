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
import vit from "../images/vit.png";
import pce from "../images/pce.png";
import spa from "../images/spa.png";
import evz from "../images/evz.png";
import ing from "../images/ing.gif";
import wob from "../images/wob.png";
import tik from "../images/tik.png";
import hcl from "../images/hcl.png";

export const teams: Teams[] = [
  {
    id: 1,
    name: "Lakers",
    abbreviation: "LAK",
    country: "Swe",
    city: "Vaxjo, Swe",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: lak,
    loses: 0,
    loses_ot: 0,
    wins: 0,
  },
  {
    id: 2,
    name: "AIK",
    abbreviation: "AIK",
    country: "Swe",
    city: "Skelleftea, Swe",
    points: 0,
    goals_for: 0,
    goals_against: 0,
    goals_diff: 0,
    rating: 99,
    game_counter: 0,
    logo: aik,
    loses: 0,
    loses_ot: 0,
    wins: 0,
  },
  // {
  //   id: 3,
  //   name: "Orebro Hockey",
  //   abbreviation: "ORE",
  //   country: "Swe",
  //   city: "Orebro, Swe",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 99,
  //   game_counter: 0,
  //   logo: ore,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 4,
  //   name: "Frolunda HC",
  //   abbreviation: "FRO",
  //   country: "Swe",
  //   city: "Frolunda, Swe",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 99,
  //   game_counter: 0,
  //   logo: fro,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 5,
  //   name: "Geneve Servette HC",
  //   abbreviation: "GEN",
  //   country: "Swi",
  //   city: "Geneva, Swi",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 99,
  //   game_counter: 0,
  //   logo: gen,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 6,
  //   name: "EHC Biel-Bienne",
  //   abbreviation: "HCB",
  //   country: "Swi",
  //   city: "Biel, Swi",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 99,
  //   game_counter: 0,
  //   logo: hcb,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 7,
  //   name: "ZSC LIONS",
  //   abbreviation: "ZSC",
  //   country: "Swi",
  //   city: "Zurich, Swi",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 99,
  //   game_counter: 0,
  //   logo: zsc,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 8,
  //   name: "SC BERN",
  //   abbreviation: "SCB",
  //   country: "Swi",
  //   city: "Bern, Swi",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 66,
  //   game_counter: 0,
  //   logo: scb,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 9,
  //   name: "Tappara",
  //   abbreviation: "TAP",
  //   country: "Fin",
  //   city: "Tampere, Fin",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 99,
  //   game_counter: 0,
  //   logo: tap,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 10,
  //   name: "Pelicans",
  //   abbreviation: "PEL",
  //   country: "Fin",
  //   city: "Lahti, Fin",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 99,
  //   game_counter: 0,
  //   logo: pel,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 11,
  //   name: "HIFK",
  //   abbreviation: "IFK",
  //   country: "Fin",
  //   city: "Helsinki, Fin",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 99,
  //   game_counter: 0,
  //   logo: ifk,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 12,
  //   name: "Ilves",
  //   abbreviation: "ILV",
  //   country: "Fin",
  //   city: "Tampere, Fin",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 99,
  //   game_counter: 0,
  //   logo: ilv,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 13,
  //   name: "EHC Red Bull",
  //   abbreviation: "RBM",
  //   country: "Ger",
  //   city: "Munich, Ger",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 99,
  //   game_counter: 0,
  //   logo: rbm,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 14,
  //   name: "Adler",
  //   abbreviation: "MAN",
  //   country: "Ger",
  //   city: "Mannheim, Ger",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 99,
  //   game_counter: 0,
  //   logo: man,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 15,
  //   name: "Dusseldorf EG",
  //   abbreviation: "DEG",
  //   country: "Ger",
  //   city: "Dusseldorf, Ger",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 66,
  //   game_counter: 0,
  //   logo: deg,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 16,
  //   name: "Kolner Haie",
  //   abbreviation: "KEC",
  //   country: "Ger",
  //   city: "Koln, Ger",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 66,
  //   game_counter: 0,
  //   logo: kec,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 17,
  //   name: "HC Vitkovice Ridera",
  //   abbreviation: "VIT",
  //   country: "CZE",
  //   city: "Ostrava, Cze",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 66,
  //   game_counter: 0,
  //   logo: vit,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 18,
  //   name: "HC Dynamo",
  //   abbreviation: "PCE",
  //   country: "CZE",
  //   city: "Pardubice, Cze",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 33,
  //   game_counter: 0,
  //   logo: pce,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 19,
  //   name: "HC Sparta",
  //   abbreviation: "SPA",
  //   country: "CZE",
  //   city: "Praha, Cze",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 33,
  //   game_counter: 0,
  //   logo: spa,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 20,
  //   name: "EV Zug",
  //   abbreviation: "EVZ",
  //   country: "CZE",
  //   city: "Zug, Swi",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 99,
  //   game_counter: 0,
  //   logo: evz,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 21,
  //   name: "ERC Ingolstadt",
  //   abbreviation: "ING",
  //   country: "GER",
  //   city: "Ingolstadt, Ger",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 99,
  //   game_counter: 0,
  //   logo: ing,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 22,
  //   name: "Grizzlies",
  //   abbreviation: "WOB",
  //   country: "GER",
  //   city: "Wolfsburg, Ger",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 99,
  //   game_counter: 0,
  //   logo: wob,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 23,
  //   name: "Timra IK",
  //   abbreviation: "TIK",
  //   country: "SWE",
  //   city: "Timra, Swe",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 66,
  //   game_counter: 0,
  //   logo: tik,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
  // {
  //   id: 24,
  //   name: "HC Lugano",
  //   abbreviation: "HCL",
  //   country: "SWI",
  //   city: "Lugano, Swi",
  //   points: 0,
  //   goals_for: 0,
  //   goals_against: 0,
  //   goals_diff: 0,
  //   rating: 66,
  //   game_counter: 0,
  //   logo: hcl,
  //   loses: 0,
  //   loses_ot: 0,
  //   wins: 0,
  // },
];
