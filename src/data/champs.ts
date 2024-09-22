import { League } from "./types";
import world_1 from "../images/world_1.png";
import world_2 from "../images/world_2.png";
import ehl from "../images/ehl.png";
import nhl_pic from "../images/nhl.png";
import shl_pic from "../images/shl.png";
import na_pic from "../images/na.png";

import {
  europeLeague,
  worldChampionship_1,
  nhl,
  worldChampionship_2,
  shl,
  na
} from "./teams";

export const champs: League[] = [
  {
    id: "1",
    name: "Hockey World Championship",
    description:
      "The World Hockey Championship is an exciting global event where the best ice hockey teams from across the world come together. It's not just about fast-paced action and sharp shooting — it's about national pride, teamwork, and intense rivalries. Fans from all walks of life come together to support their countries, creating a colorful atmosphere both in the arenas and at home.",
    image: world_1,
    teams: worldChampionship_1,
    teamsCount: 16
  },
  {
    id: "2",
    name: "European Hockey League",
    description:
      "The European Hockey League is a fantasy league featuring the best hockey teams from the top hockey countries in Europe: Sweden, Finland, Switzerland, Germany, Czech Republic, England and Slovakia.",
    image: ehl,
    teams: europeLeague,
    teamsCount: 35
  },
  {
    id: "3",
    name: "National Hockey League",
    description:
      "The National Hockey League featuring US and Canadian teams. The league has the highest level of any league.",
    image: nhl_pic,
    teams: nhl,
    teamsCount: 32
  },
  {
    id: "4",
    name: "European Hockey League Division I",
    description: "Second level of World Championship.",
    image: world_2,
    teams: worldChampionship_2,
    teamsCount: 12
  },
  {
    id: "5",
    name: "Swedish Hockey League",
    description:
      "Highest division in the Swedish ice hockey system. The league currently consists of 14 teams. The league was founded in 1975 and the winner is awarded the Le Mat Trophy.",
    image: shl_pic,
    teams: shl,
    teamsCount: 14
  },
  {
    id: "6",
    name: "National League",
    description:
      "The National League a league in Switzerland and is the top tier of the Swiss league system. ",
    image: na_pic,
    teams: na,
    teamsCount: 14
  }
];
