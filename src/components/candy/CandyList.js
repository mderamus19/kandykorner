import React, { Component } from "react";

export default class CandyList extends Component {
  render() {
    return (
      <section className="candies">
        {this.props.candies.map(candy => (
          <div key={candy.id}>
            {candy.name} of type{" "}
            {
              this.props.candyTypes.find(
                candyType => candy.candyTypeId === candyType.id
              ).name
            }
            <div key={candy.id} className="card">
              <div className="card-body">
                <div className="card-title">
                  <h5>{candy.name}</h5>
                  <button
                    onClick={() => this.props.deleteCandy(candy.id)}
                    className="card-link"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  }
}
