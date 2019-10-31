import React, { useEffect, useState } from "react";
import { getDataFromUmbraco } from "../getDataFromUmbraco";

let style = {
  width: "500px"
};

var _data;

export const Department = () => {
  const [data, setData] = useState({});

  const returnList = [];
  useEffect(() => {
    var promiseResult = getDataFromUmbraco("1077", true);
    promiseResult.then(result => {
      _data = result._embedded.content;
      setData({ _data });
    });
  }, []);

  console.log(data._data);
  if (data._data !== undefined) {
    data._data.map(element => {
      console.log(element.properties.adress);

      returnList.push(<h6>{element.properties.adress}</h6>);
    });

    return (
      <div className="container">
        <h4>Departments</h4>
        <form className="form-inline my-2 my-lg-0">
          <input
            style={style}
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
        <div>{returnList}</div>
      </div>
    );
  } else {
    return <span>Loading ...</span>;
  }
};
