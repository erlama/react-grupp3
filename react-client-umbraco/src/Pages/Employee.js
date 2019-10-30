import React, { useEffect, useState } from "react";
import { getDataFromUmbraco } from "../getDataFromUmbraco";

var _data;
export const Employee = () => {
  const [data, setData] = useState({});
  const returnList = [];
  useEffect(() => {
    var promiseResult = getDataFromUmbraco("1089");
    promiseResult.then(result => {
      _data = result._embedded.content;
      setData({ _data });
    });
  }, []);

  console.log(data._data);
  if (data._data !== undefined) {
    data._data.map(element => {
      console.log(element.properties.employeeName);
      returnList.push(
        <h1 key={element.id}>{element.properties.employeeName}</h1>
      );
    });
    return returnList;
  } else {
    return <span>Loading ...</span>;
  }
};
