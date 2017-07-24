import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Page2 extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi people</h1>
        <p>Welcome to page 2</p>
        <img src="http://lorempixel.com/300/300" />
        <br/>
        <Link to="/">Go back to the homepage</Link>
      </div>
    )
  }
}
