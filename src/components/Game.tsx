import React, { useState } from "react";
import { Button, Card, Col, Row, Typography } from "antd";
import { teams } from "../data/teams";
import { GameResult, Schedule, Teams } from "../data/types";
import { schedule, scheduleList } from "../data/schedule";
import Sheet from "./Sheet";

const { Meta } = Card;
const { Title } = Typography;
schedule();

export function Game() {
  let [teamsUpdate, setTeamsUpdate] = useState<Teams[]>(teams);
  let [gameCounter, setGameCounter] = useState<number>(0);
  let [homeGoals, setHomeGoals] = useState<number>(0);
  let [awayGoals, setAwayGoals] = useState<number>(0);
  let [typeOfOt, setTypeOfOt] = useState<string>("");
  const [isSimulate, setIsSimulate] = useState<boolean>(false);
  const [gameIndex, setGameIndex] = useState<number>(0);

  const updateCounter = () => {
    setGameCounter(gameCounter + 1);
    setIsSimulate(false);
  };

  const buttonHandler = () => {
    let lastGame: GameResult | undefined = Simulate(scheduleList[gameCounter]);
    console.log(gameIndex + 1, lastGame);
    if (lastGame) {
      setHomeGoals(lastGame.homeGoals);
      setAwayGoals(lastGame.awayGoals);
      setTypeOfOt(lastGame.overtime);
    }
  };

  function Simulate(game: Schedule) {
    setGameIndex(scheduleList.indexOf(game) + 1);
    let home: Teams = {
      id: 0,
      name: "",
      abbreviation: "",
      country: "",
      city: "",
      points: 0,
      goals_for: 0,
      goals_against: 0,
      goals_diff: 0,
      rating: 0,
      game_counter: 0,
      logo: "",
    };
    let away: Teams = {
      id: 0,
      name: "",
      abbreviation: "",
      country: "",
      city: "",
      points: 0,
      goals_for: 0,
      goals_against: 0,
      goals_diff: 0,
      rating: 0,
      game_counter: 0,
      logo: "",
    };
    function getGoals(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const homeType: Teams | undefined = teams.find(
      (element) => element.abbreviation === game.home
    );
    if (homeType !== undefined) {
      home = homeType;
    }

    const awayType: Teams | undefined = teams.find(
      (element) => element.abbreviation === game.away
    );
    if (awayType !== undefined) {
      away = awayType;
    }
    console.log("awayType", awayType);

    //Goals
    let hGoals: number = Math.round((getGoals(0, 9) * home.rating) / 100);
    let aGoals: number = Math.round((getGoals(0, 9) * away.rating) / 100);

    // Make more realistic game score

    if (hGoals - aGoals >= 4 || aGoals - hGoals >= 4) {
      if (Math.random() < 0.9) {
        aGoals += 1;
      }
    }

    // OT or S/O
    let overtime: string = "";
    if (hGoals === aGoals) {
      if (Math.random() > 0.5) {
        hGoals += 1;
        away.points += 1;
      } else {
        aGoals += 1;
        home.points += 1;
      }
      if (Math.random() > 0.5) {
        overtime = "Overtime";
      } else {
        overtime = "Shootout";
      }
    }

    // Points

    if (hGoals > aGoals) {
      home.points += 2;
    } else {
      away.points += 2;
    }

    // Goals & Games Stats

    home.goals_for += homeGoals;
    home.goals_against += awayGoals;
    home.game_counter += 1;
    home.goals_diff += home.goals_for - home.goals_against;
    away.goals_for += awayGoals;
    away.goals_against += homeGoals;
    away.game_counter += 1;
    away.goals_diff += away.goals_for - away.goals_against;

    let result: GameResult = {
      home: home.abbreviation,
      away: away.abbreviation,
      homeGoals: hGoals,
      awayGoals: aGoals,
      overtime: overtime,
    };
    setTeamsUpdate(teams);
    setIsSimulate(true);
    return result;
  }

  if (scheduleList && gameCounter < scheduleList.length) {
    return (
      <div>
        <Row>
          <Col span={12}>
            <Sheet teams={teamsUpdate} />
          </Col>
          <Col span={12}>
            <Row className="row-panel-cards">
              <Col span={12}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={
                    <img
                      alt={
                        teams.find(
                          (element) =>
                            element.abbreviation ===
                            scheduleList[gameCounter].away
                        )?.name + "Logo"
                      }
                      src={
                        teams.find(
                          (element) =>
                            element.abbreviation ===
                            scheduleList[gameCounter].away
                        )?.logo
                      }
                    />
                  }
                >
                  <Meta
                    title={
                      teams.find(
                        (element) =>
                          element.abbreviation ===
                          scheduleList[gameCounter].away
                      )?.abbreviation
                    }
                    description={
                      teams.find(
                        (element) =>
                          element.abbreviation ===
                          scheduleList[gameCounter].away
                      )?.city
                    }
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={
                    <img
                      alt={
                        teams.find(
                          (element) =>
                            element.abbreviation ===
                            scheduleList[gameCounter].home
                        )?.name + "Logo"
                      }
                      src={
                        teams.find(
                          (element) =>
                            element.abbreviation ===
                            scheduleList[gameCounter].home
                        )?.logo
                      }
                    />
                  }
                >
                  <Meta
                    title={
                      teams.find(
                        (element) =>
                          element.abbreviation ===
                          scheduleList[gameCounter].home
                      )?.abbreviation
                    }
                    description={
                      teams.find(
                        (element) =>
                          element.abbreviation ===
                          scheduleList[gameCounter].home
                      )?.city
                    }
                  />
                </Card>
              </Col>
            </Row>
            <Row className="panel-score">
              <Col span={24} className="panel-simulate">
                <Card hoverable>
                  <Title>{isSimulate ? awayGoals : " "}</Title>
                  <Title>-</Title>
                  <Title>{isSimulate ? homeGoals : " "}</Title>
                  <Title level={2}>{isSimulate ? typeOfOt : ""}</Title>
                </Card>
              </Col>
            </Row>
            <Row className="row-panel-simulate">
              <Col span={24} className="panel-simulate">
                <Button
                  onClick={buttonHandler}
                  disabled={isSimulate}
                  size="large"
                >
                  Simulate
                </Button>
                <Button
                  onClick={updateCounter}
                  disabled={!isSimulate}
                  size="large"
                >
                  Next Game
                </Button>
              </Col>
              <Col span={24} className="panel-counter">
                <Title level={3}>
                  {gameIndex}/{scheduleList.length}
                </Title>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  } else {
    return (
      <div>
        <Row>
          <Col span={12}>
            <Sheet teams={teamsUpdate} />
          </Col>
          <Col span={12}>
            <Title>There are no Games</Title>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Game;
