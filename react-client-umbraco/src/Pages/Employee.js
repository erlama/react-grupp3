import React, { useEffect, useState } from "react";
import { getDataFromUmbraco } from "../getDataFromUmbraco";
import { EmployeeDetails } from "./EmployeeDetails";

let style = {
  width: "500px"
};

var _data;

export const Employee = () => {
  const [data, setData] = useState({});

  const returnList = [];
  useEffect(() => {
    var promiseResult = getDataFromUmbraco("1089", true);
    promiseResult.then(result => {
      _data = result._embedded.content;
      setData({ _data });
    });
  }, []);

  console.log(data._data);
  if (data._data !== undefined) {
    data._data.map(element => {
      console.log(element.properties.firstName);

      // returnList
      //   .push
      //   // <a href="#" key={element.id} onClick={getDetails(element.id)}>
      //   //   {element.properties.firstName}
      //   // </a>
      //   // <EmployeeDetails
      //   //   key={element.id.toString()}
      //   //   employeeId={element.id.toString()}
      //   // />
      //   ();
    });
  } else {
    return <span>Loading ...</span>;
  }
  return (
    <div className="container">
      <h4>Employees</h4>
      <form className="form-inline my-2 my-lg-0">
        <input
          style={style}
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
      <div>{returnList}</div>
    </div>
  );
};

// var _details;
// const getDetails = employeeId => {
//   console.log("5555");
//   var promiseResult = getDataFromUmbraco(employeeId, false);
//   promiseResult.then(result => {
//     setTimeout(() => {
//       _details = result._embedded.content;
//       console.log(_details);
//     }, 5000);
//   });
// };
