import React from "react";
import ButterfliesObjs from "./butterflies";
import ButterflyImg from "./butterfliesImgs"

const ButterfliesDivs = () => (
  <div className="butterflyImgwrapper">
    {ButterfliesObjs.map(butterflies=>(
      <ButterflyImg image={butterflies.image}/>
    ))}
    
  </div>
    
);

export default ButterfliesDivs;