import React, { Component } from "react";
import { data2 } from "../shared/ListOfFilms";
import { data1 } from "../shared/ListOfPlayers";
import PlayersPresentation from "./PlayersPresentation";
import Flims from "./Flims";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      players: data1,
      flims: data2,
    };
  }
  render() {
    return <Flims flims={this.state.flims} />;
    //return <PlayersPresentation players={this.state.players} />;
  }
}
export default Main;
