import React from "react";

let style = {
  width: "500px"
};

/*export const Employee = () => (
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
  </div>
);*/

export const Employee = token => {
  console.log(token.token);

  fetch("http://localhost:65022/umbraco/rest/v1/content/1089/children", {
    method: "get",
    headers: {
      Authorization: "Bearer " + token.token,
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      //debugger;
      /*var contentdata = {
        content: data._embedded.content[0].properties
      };
      console.log(contentdata);*/
      console.log(data);
      //return contentdata;
    });

  return <h1>Hello!</h1>;
};

/*function getContent(token) {
  console.log(token);
  console.log("**************");
  fetch("http://localhost:65022/umbraco/rest/v1/content/", {
    method: "get",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then(response => {
      return response.json();
    })
    .then(data => {
      debugger;
      var data = {
        content: data._embedded.content["0"].properties
      };
      return data;
    });*/
