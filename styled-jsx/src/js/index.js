import React from "react";
import ReactDOM from "react-dom";

const Index = () => {
  return (
  <div>
    <style jsx>{`
      background-color: blue;
    `}</style>
    Hello React!
  </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("index"));