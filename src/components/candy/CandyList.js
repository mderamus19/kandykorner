import React, { Component } from "react";
// import CandyTypeList from "./candyType/CandyTypeList";

export default class CandyList extends Component {
  render() {
    console.log(this.props.candyTypes)
    return (
      <section className="candies">
        {this.props.candies.map(candy => (
          <div key={candy.id}>
            {candy.name}
           of type
            {this.props.candyTypes.find((candyType) => candy.candyTypeId === candyType.id ).name}
          </div>
        ))}
      </section>
    );
  }
}
