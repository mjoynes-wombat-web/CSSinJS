import React from "react";
import ReactDOM from "react-dom";

import "../sass/main.scss";

import Ghost from './Ghost.js'

const Index = () => {
  return (
    <>
      <Ghost ghost="blinky" quadrant="top-left" timing="move-first" />
      <Ghost ghost="pinky" quadrant="top-right" timing="move-fourth" />
      <Ghost ghost="clyde" quadrant="bottom-left" timing="move-second" />
      <Ghost ghost="inky" quadrant="bottom-right" timing="move-third" />
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));