import React, { useEffect, useState } from "react";
import { getDataFromControllers } from "../getDataFromControllers";
import { MDBDataTable } from "mdbreact";
let style = {
 width: "500px"
};
let tableStyle = {
 marginTop: "50px"
};
var _data;
var tableData;
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
   // data._data.forEach(element => {
   //   returnList.push(
   //     <tr key={element.Id}>
   //       <th scope="row">{element.Id}</th>
   //       <td>{element.FirstName}</td>
   //       <td>{element.LastName}</td>
   //       <td>{element.Department}</td>
   //       <td>{element.Country}</td>
   //     </tr>
   //   );
   // });
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
     <h4>Employees</h4>
     <div>
       <MDBDataTable bordered hover data={tableData} />
     </div>
   </div>
 );
};
