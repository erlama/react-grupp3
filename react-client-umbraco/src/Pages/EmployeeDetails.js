import React, { useEffect, useState } from "react";
import { getDataFromControllers } from "../getDataFromControllers";

var _data;
var returnToView;
export const EmployeeDetails = employeeid => {
  var id = employeeid.location.params;
  const [data, setData] = useState({});
  useEffect(() => {
    var promiseResult = getDataFromControllers(
      "employees/Getemployeebyid?ids=" + id
    );
    promiseResult.then(result => {
      _data = result;
      setData({ _data });
      console.log(_data);
    });
  }, []);
  if (data._data !== undefined) {
    returnToView = (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-info text-center">
              {data._data.FirstName} {data._data.LastName}
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <span className="badge badge-default">
              Department : {data._data.Department}
            </span>
            <span className="badge badge-default">
              Company number : {data._data.CompanyNumber}
            </span>
            <span className="badge badge-default">
              Phone number : {data._data.Phone}
            </span>
            <span className="badge badge-default">
              Email : {data._data.Email}
            </span>
            <span className="badge badge-default">
              Address : {data._data.Address}
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return <span>Loading ...</span>;
  }
  return <div className="container">{returnToView}</div>;
};
