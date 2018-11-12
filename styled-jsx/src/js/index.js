import React from "react";
import ReactDOM from "react-dom";

import Ghost from './Ghost.js'

const Index = () => {
  return (
    <>
      <style jsx global>
        {`
          body {
            background: #000;
          }
        `}
      </style>
      <Ghost ghost="blinky" quadrant="top-left" timing="move-first" />
      <Ghost ghost="pinky" quadrant="top-right" timing="move-fourth" />
      <Ghost ghost="clyde" quadrant="bottom-left" timing="move-second" />
      <Ghost ghost="inky" quadrant="bottom-right" timing="move-third" />
    </>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));