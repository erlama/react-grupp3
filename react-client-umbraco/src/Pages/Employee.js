import React, { useEffect, useState } from "react";
import { getDataFromControllers } from "../getDataFromControllers";

let style = {
  width: "500px"
};
let tableStyle = {
  marginTop: "50px"
};

var _data;

export const Employee = () => {
  const [data, setData] = useState({});

  const returnList = [];
  useEffect(() => {
    var promiseResult = getDataFromControllers("employees/getallemployees");
    promiseResult.then(result => {
      _data = result;
      setData({ _data });
    });
  }, []);

  if (data._data !== undefined) {
    data._data.forEach(element => {
      returnList.push(
        <tr key={element.Id}>
          <th scope="row">{element.Id}</th>
          <td>{element.FirstName}</td>
          <td>{element.LastName}</td>
          <td>{element.Department}</td>
          <td>{element.Country}</td>
        </tr>
      );
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
      <div>
        <table id="EmployeeTable" className="table" style={tableStyle}>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>{returnList}</tbody>
        </table>
      </div>
    </div>
  );
};
