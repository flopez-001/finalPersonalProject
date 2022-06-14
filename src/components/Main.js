import React, {useState, useEffect} from "react"
import DailySoup from "./DailySoup"
import SoupAPI from "../api/SoupAPI"
import SoupList from "./SoupList"
import staticdata from "../data"

export default function Main(){
  const [soups, setSoups] = useState([])
  useEffect(() => {
    const getSoups = async () => {
      const data = await SoupAPI.fetchSoups()
      if (data) {
        setSoups(data.soups)
      }
    }

    getSoups()
  }, [])

    const [mainSoup, setMainSoup] = useState(staticdata.soups[0])
    function getNewSoup() {
        setMainSoup(staticdata.soups[Math.floor(Math.random() * staticdata.soups.length)])
  }
  
  return(
    <main>
        <h1 className="mainTitle">Welcome to Soup of the Day!</h1>
        <button className="newSoup" onClick={getNewSoup}>Get new soups</button> 
        <DailySoup 
            key={mainSoup.id}
            item={mainSoup}
            />
        <SoupList soups={soups} />
        
    </main>
  )
}