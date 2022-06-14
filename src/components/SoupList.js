import React from "react"
import { Link } from "react-router-dom"


export default function SoupList(props) {
    // render
    const renderSoup = () => {
      if (!props.soups)
        return null
  
      return props.soups.map((soup, index) => {
        return (
          <div key={index}>
            <p><Link to={`${soup.id}/`}>{ soup.title }</Link></p>
            <p>{ soup.description }</p>
            <p>{ soup.ingredients }</p>
            <p>{ soup.instructions }</p>
          </div>
        )
      })
    }
  
    return (
      <div>
          <div>
              <p>#</p>
              <p>Soup: {props.soups.title}</p>
              <p>description {props.soups.description}</p>
              <p>ingredients {props.soups.ingredients}</p>
              <p>instructions {props.soups.ingredients}</p>
          </div>
          <div>
            { renderSoup() }
          </div>
      </div>
    )
  }