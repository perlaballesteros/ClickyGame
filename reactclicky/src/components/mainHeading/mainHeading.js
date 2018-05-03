import React from "react";

const MainHeading = (props) => (
  <div className="MainHeading">
    <h1>Clicky Game!</h1>
    <h6>How to Play:</h6>
    <p>Click on an butterfly to earn points, but don't click on a butterfly more than once!</p>
    <div className="scores">
        Score: {props.score} | topScore: {props.topScore}
    </div>
  </div> 
);

export default MainHeading;