import React, { useEffect, useState } from "react";
import { getDataFromControllers } from "../getDataFromControllers";
import { MDBDataTable } from "mdbreact";
import { Link } from "react-router-dom";

var _data;
var tableData;

export const Employee = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    var promiseResult = getDataFromControllers("employees/getallemployees");
    promiseResult.then(result => {
      _data = result;
      setData({ _data });
    });
  }, []);

  if (data._data !== undefined) {
    var employeesList = data._data;
    employeesList.forEach(emp => {
      emp.Info = (
        <span className="input-group-btn">
          <Link
            to={{
              pathname: "/employeedetails/",
              params: emp.Id
            }}
          >
            Click for more info
          </Link>
        </span>
      );
    });
    tableData = {
      columns: [
        {
          label: "Id",
          field: "Id",
          sort: "asc",
          width: 150
        },
        {
          label: "First name",
          field: "FirstName",
          sort: "asc",
          width: 270
        },
        {
          label: "Last name",
          field: "LastName",
          sort: "asc",
          width: 200
        },
        {
          label: "Department",
          field: "Department",
          sort: "asc",
          width: 100
        },
        {
          label: "Country",
          field: "Country",
          sort: "asc",
          width: 150
        },
        {
          label: "Info",
          field: "Info",
          sort: "asc",
          width: 100
        }
      ],
      rows: data._data
    };
  } else {
    return <span>Loading ...</span>;
  }

  return (
    <div className="container">
      <h4>Employees</h4>
      <div>
        <MDBDataTable bordered hover data={tableData} btn />
      </div>
    </div>
  );
};
