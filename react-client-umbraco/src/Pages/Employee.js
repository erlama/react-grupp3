import React, { useEffect, useState } from "react";
import { getDataFromUmbraco } from "../getDataFromUmbraco";

var _data;
export const Employee = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    var promiseResult = getDataFromUmbraco();
    promiseResult.then(result => {
      _data = result._embedded.content;
      setData({ _data });
    });
  }, []);

  console.log(data._data);
  if (data._data !== undefined) {
    data._data.forEach(element => {
      console.log(element.properties.employeeName);
    });
    return <h1>hello</h1>;
  } else {
    console.log("***");
    return <span>Loading ...</span>;
  }
};
