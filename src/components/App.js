import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [ sushis, setSushis ] = useState([])
  const [ index, setIndex ] = useState(0)
  const [ wallet, setWallet ] = useState(100)

  useEffect(() => {
    fetchSushi()
  },[])
  
  function fetchSushi(){
    fetch(API)
    .then(r => r.json())
    .then(sushis => {
      const updatedSushis = sushis.map((s) => {
        return {...s, eaten: false}
      })
      setSushis(updatedSushis)
    })
  }
  const displaySushis = sushis.slice(index, index+4)
  const eatenSushis = sushis.filter((s) => s.eaten === true)

  function handleMoreSushi(){
    setIndex((index) => index + 4)
  }

  function eatSushi(sushi){
    const updatedDisplaySushi = sushis.map((s) => {
      if(s.id === sushi.id && wallet >= s.price){
        s.eaten = true
        setWallet((wallet) => {return wallet - s.price})
        return s
      } else {
        return s
      }
    })
    setSushis(updatedDisplaySushi)
  }

  return (
    <div className="app">
      <SushiContainer eatSushi={eatSushi} sushis={displaySushis} handleMoreSushi={handleMoreSushi} />
      <Table wallet={wallet} plates={eatenSushis}/>
    </div>
  );
}

export default App;
