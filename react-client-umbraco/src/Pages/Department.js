import React from 'react'

let style = {
  width: '500px'
}

export const Department = () => 
   (
    <div className="container">
      <h4>Department</h4>
        <form className="form-inline my-2 my-lg-0">
          <input style={style} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
  );

 