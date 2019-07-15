import React, { Component } from "react";
import { Route } from "react-router-dom";
import StoreList from "./store/StoreList";
import CandyList from "./candy/CandyList";
import EmployeeList from "./employee/EmployeeList";
import CandyTypeList from "./candyType/CandyTypeList";

export default class ApplicationViews extends Component {
  state = {
    stores: [],
    employees: [],
    candies: [],
    candyTypes: []
  };

  componentDidMount() {
    const newState = {};

    fetch("http://localhost:5002/stores")
      .then(r => r.json())
      .then(stores => (newState.stores = stores))
      .then(() => fetch("http://localhost:5002/employees").then(r => r.json()))
      .then(employees => (newState.employees = employees))
      .then(() => fetch("http://localhost:5002/candies").then(r => r.json()))
      .then(candies => (newState.candies = candies))
      .then(() => fetch("http://localhost:5002/candyTypes").then(r => r.json()))
      .then(candyTypes => (newState.candyTypes = candyTypes))
      .then(() => this.setState(newState));
  }

  deleteCandy = id => {
    return fetch(`http://localhost:5002/candies/${id}`, {
      method: "DELETE"
    })
      .then(e => e.json())
      .then(() => fetch(`http://localhost:5002/candies`))
      .then(e => e.json())
      .then(candies =>
        this.setState({
          candies: candies
        })
      );
  };
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            return <StoreList stores={this.state.stores} />;
          }}
        />
        <Route
          path="/candies"
          render={props => {
            return (
              <CandyList
              candies={this.state.candies}
              candyTypes={this.state.candyTypes}
              deleteCandy={this.deleteCandy}
              />
            );
          }}
        />
        <Route
          path="/employees"
          render={props => {
            return <EmployeeList employees={this.state.employees} />;
          }}
        />

        <Route
          path="/candyTypes"
          render={props => {
            return <CandyTypeList candyTypes={this.state.candyTypes} />;
          }}
        />
      </React.Fragment>
    );
  }
}
