import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import { CitySelect, StateSelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import sideImg from "../src/images/paper.jfif"; 

function App() {
  const [stateid, setstateid] = useState(0);
  return (
    <div>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#formModal"
      >
        Open
      </button>

      <div
        class="modal fade"
        id="formModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-xl">
          <div class="modal-content bgImg">
            <div class="modal-header">
            <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-lg-5">
                  <img src={sideImg} alt="" className="img-fluid" />
                </div>
                <div className="form_field col-lg-7">
                  <div className="header">
                    <h1 className="title">Connect With Our Counsellor</h1>
                    <i className="imp">
                      *Please provide the information below, and our counsellor
                      will get in touch with you.
                    </i>
                  </div>
                  <div className="row ">
                    <div className="form-group col-lg-6 mb-3">
                      <label className="form-label" name="Enter your Name">
                        Enter your Name
                      </label>{" "}
                      <br />
                      <input
                        className="form-control"
                        type="text"
                        name="Enter your Name"
                      ></input>
                    </div>
                    <div className="form-group col-lg-6 mb-3">
                      <label className="form-label" name="Enter your Email">
                        Enter your Email
                      </label>{" "}
                      <br />
                      <input
                        className="form-control"
                        type="text"
                        name="Enter your Email"
                      ></input>
                    </div>

                    <div className="form-group col-lg-6 mb-3">
                      <label className="form-label" name="Enter your Number">
                        Enter your Number
                      </label>{" "}
                      <br />
                      <input
                        className="form-control"
                        type="number"
                        name="Enter your Number"
                      ></input>
                    </div>
                    <div className="form-group col-lg-6 mb-3">
                      <label className="form-label" name="Enter your State">
                        Enter your State
                      </label>{" "}
                      <br />
                      <StateSelect
                        countryid={101}
                        onChange={(e) => {
                          setstateid(e.id);
                        }}
                        placeHolder="Select State"
                        className="selectorIn"
                      />
                    </div>

                    <div className="form-group col-lg-6 mb-3">
                      <label className="form-label" name="Enter your City">
                        Enter your City
                      </label>{" "}
                      <br />
                      <CitySelect
                        countryid={101}
                        stateid={stateid}
                        onChange={(e) => {
                          console.log(e);
                        }}
                        placeHolder="Select City"
                      />
                    </div>
                    <div className="form-group col-lg-6 mb-3">
                      <label className="form-label">
                        Degree you are looking for *<br />
                      </label>
                      <select className="form-select" name="selecteddegree">
                        <option value="doctorate">Doctorate</option>
                        <option value="post graduation">Post Graduation</option>
                        <option value="graduation">graduation</option>
                        <option value="diploma">Diploma</option>
                        <option value="certificate">Certificate</option>
                      </select>
                    </div>
                  </div>
                  <div className="selector">
                    <label className="form-label">
                      Select course *<br />
                    </label>
                    <input className="form-control"></input>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox"></input>
                    <p>
                      By clicking on the above button, I authorize ISBMU and/or
                      their representative to contact me via Phone, SMS,
                      WhatsApp, and/or email.
                    </p>
                  </div>
                  <div class="modal-footer row">
                    <button type="submit" class="btn btn-primary col-md custom-button">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
