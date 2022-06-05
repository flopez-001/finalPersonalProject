import React, {useState} from "react"
import DailySoup from "./DailySoup"
import soup_logo from "./soup_logo.jpg"
import data from "../data"

export default function Main(){
    const [mainSoup, setMainSoup] = useState(data.soups[0])
    function getNewSoup() {
        setMainSoup(data.soups[Math.floor(Math.random() * data.soups.length)])
  }
  
  return(
    <main>
        <h1 className="mainTitle">Welcome to Soup of the Day!</h1>
        <button className="newSoup" onClick={getNewSoup}>Get new soups</button> 
        <DailySoup 
            key={mainSoup.id}
            item={mainSoup}
            />
    </main>
  )
}