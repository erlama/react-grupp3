// import React, { useEffect, useState } from "react";
// import { getDataFromUmbraco } from "../getDataFromUmbraco";

// export const EmployeeDetails = employeeId => {
//   const [details, setDetails] = useState({});
//   var _data;
//   //   const returnList = [];

//   useEffect(() => {
//     var promiseResult = getDataFromUmbraco(employeeId, false);
//     promiseResult.then(result => {
//       _data = result._embedded.content;
//       setDetails({ _data });
//     });
//   }, []);

//   if (details._data !== undefined) {
//     console.log(details._data);
//     return null;
//   } else {
//     return <span>Loading ...</span>;
//   }
// };
