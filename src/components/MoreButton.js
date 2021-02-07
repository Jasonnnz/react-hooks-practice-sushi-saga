import React from "react";

function MoreButton(props) {
  function handleMoreClick(){
    props.handleMoreSushi()
  }
  return <button onClick={handleMoreClick}>More sushi!</button>;
}

export default MoreButton;
