import React, { useEffect, useState } from "react";
import { getDataFromControllers } from "../getDataFromControllers";
import { MDBDataTable } from "mdbreact";

var _data;
var tableData;

export const Department = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    var promiseResult = getDataFromControllers("departments/getAllDepartments");
    promiseResult.then(result => {
      _data = result;
      setData({ _data });
    });
  }, []);

  if (data._data !== undefined) {
    tableData = {
      columns: [
        {
          label: "Id",
          field: "Id",
          sort: "asc",
          width: 150
        },
        {
          label: "Department name",
          field: "Name",
          sort: "asc",
          width: 270
        },
        {
          label: "Address",
          field: "Address",
          sort: "asc",
          width: 200
        },
        {
          label: "Phone number",
          field: "PhoneNumber",
          sort: "asc",
          width: 100
        },
        {
          label: "Country",
          field: "LandName",
          sort: "asc",
          width: 150
        }
      ],
      rows: data._data
    };
  } else {
    return <span>Loading ...</span>;
  }

  return (
    <div className="container">
      <h4>Departments</h4>
      <div>
        <MDBDataTable bordered hover data={tableData} />
      </div>
    </div>
  );
};
