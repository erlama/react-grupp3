import React, { useEffect, useState } from "react";
import { getDataFromControllers } from "../getDataFromControllers";
import { MDBDataTable } from "mdbreact";

var _data;
var tableData;

export const Country = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    var promiseResult = getDataFromControllers("countries/getAllCountries");
    promiseResult.then(result => {
      _data = result;
      setData({ _data });
    });
  }, []);

  if (data._data !== undefined) {
    tableData = {
      columns: [
        {
          label: "Name",
          field: "Name",
          sort: "asc",
          width: 270
        }
      ],
      rows: data._data
    };
    console.log(data._data);
  } else {
    return <span>Loading ...</span>;
  }
  return (
    <div className="container">
      <h4>Countries</h4>
      <MDBDataTable bordered hover data={tableData} />
    </div>
  );
};
