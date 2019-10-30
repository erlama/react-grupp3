import React from '../../node_modules/react'
//import { Link } from '../../node_modules/react-router-dom'
import "../assets/css/_m.css"
export const Home = () => 
   (
    <div className="container home-container">
      <div className="row backdrop"><br/><br/></div>
      <div className="row justify-content-center backdrop">
        <div className="col-md-10">
          <input type="text" className="form-control search-box py-4 mt-2" placeholder="Type here to start searching.."></input>
        </div>
      </div>
      <div className="row justify-content-center backdrop py-4">
        <div className="col-md-4">
          <button className="btn btn-secondary btn-block" id="search-button-home">Search</button>
        </div>
      </div>
      <div className="row justify-content-center backdrop">
        <div class="col-md-4">
          <div className="container row justify-content-md-end">
            <div className="col-md-1 align-self-center">
              <input id="employee-check" className="form-check ml-auto" type="checkbox" value="employee"></input>
            </div>
            <div className="col-md-3">
              <label for="employee-check" className="col-form-label overlay-text">Employee</label>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div className="container row justify-content-md-center">
            <div className="col-md-1 align-self-center">
              <input id="Country-check" className="form-check ml-auto" type="checkbox" value="Country"></input>
            </div>
            <div className="col-md-3">
              <label for="Country-check" className="col-form-label overlay-text">Country</label>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div className="container row justify-content-md-start">
            <div className="col-md-1 align-self-center">
              <input id="Company-check" className="form-check ml-auto" type="checkbox" value="Company"></input>
            </div>
            <div className="col-md-3">
              <label for="Company-check" className="col-form-label overlay-text">Company</label>
            </div>
          </div>
        </div>
      </div>
      <div className="row bottom-section">&nbsp;</div>
    </div>
  );
