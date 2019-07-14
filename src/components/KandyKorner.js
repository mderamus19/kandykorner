import React, { Component } from "react";
import { Route } from "react-router-dom";
import StoreList from "./store/StoreList";
import CandyList from "./candy/CandyList";
import EmployeeList from "./employee/EmployeeList";

export default class KandyKorner extends Component {
  storesFromAPI = [
    { id: 1, name: "Sugarville, AL" },
    { id: 2, name: "Sweet Hills, VA" },
    { id: 3, name: "Godiva, PA" }
  ];

  employeesFromAPI = [
    { id: 1, name: "Sugar Daddy" },
    { id: 2, name: "Kit Kat" },
    { id: 3, name: "Baby Ruth" }
  ];
  candyTypesFromAPI = [
    { id: 1, name: "Gummy" },
    { id: 2, name: "Chocolate Bar" },
    { id: 3, name: "Chewy" }
  ];

  candiesFromAPI = [
    { id: 1, name: "Twin Cherries" },
    { id: 2, name: "Snicker" },
    { id: 3, name: "Starburst" }
  ];

  state = {
    stores: this.storesFromAPI,
    employees: this.employeesFromAPI,
    candies: this.candiesFromAPI
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
            return <CandyList candies={this.state.candies} />;
          }}
        />
        <Route
          path="/employees"
          render={props => {
            return <EmployeeList employees={this.state.employees} />;
          }}
        />
      </React.Fragment>
    );
  }
}
