import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi';

function SushiContainer(props) {

  const sushiList = props.sushis.map((s) => {
    return <Sushi key={s.id} sushi={s} eatSushi={props.eatSushi}/>
  })

  return (
    <div className="belt">
      {sushiList}
      <MoreButton handleMoreSushi={props.handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
