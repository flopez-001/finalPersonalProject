import React from "react"


export default function DailySoup(props){
  return(
    <div className="daily_soup_card">
      <h2 className="daily_soup_title">{props.item.title}</h2>
      <img src={props.item.img} width="60%" className="daily_soup_img"/>
      <p className="daily_soup_description">{props.item.description} </p>
    </div>
  )
}