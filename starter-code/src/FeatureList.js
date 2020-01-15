import React, { Component } from "react"
import { render } from "react-dom"
import Feature from "./Feature"


class FeatureList extends Component{

  render() {
    return(
      <div className="container mt-4">
      <ul class="feature">
      <Feature img="images/icon1.png" title="Declarative" description="React makes it less painless to create interactive UIs" />
      <Feature img="images/icon2.png" title="Components" description="Build encapsulated that manage their state" />
      <Feature img="images/icon3.png" title="Single-Way" description="A set of immutable values are passed to the components" />
      <Feature img="images/icon4.png" title="JSX" description="Statically-typed, designed to run on modern browsers" />
      </ul>
      </div>
    );


  }

}


export default FeatureList