import './Modal.css';
import { useState } from 'react';
import {CitySelect, StateSelect} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

function Modal() {
  const [stateid, setstateid] = useState(0);
  return (   
    <div className="form">
      <div className= "form_img">
      <img src="https://isbmuniversity.ac.in/assets/Images/commonimg/english_teacher_doing_her_lessons_online_1_634dad1575.png" alt="counsellor" />
      </div>
      <div className= "form_field">
        <h1 className= "title">Connect With Our Counsellor</h1>
        <i className= "imp">*Please provide the information below, and our counsellor will get in touch with you.</i>
        <div className= "input_field">
          <div className='input_container'>
            <label name="Enter your Name">Enter your Name</label> <br/>
            <input type="text"  name="Enter your Name"></input>
          </div>
          <div className='input_container'>
            <label name="Enter your Email">Enter your Email</label> <br/>
            <input type="text"  name="Enter your Email"></input>
          </div>
        </div>
        <div className= "input_field">
          <div className='input_container'>
            <label name="Enter your Number">Enter your Number</label> <br/>
            <input type="number"  name="Enter your Number"></input>
          </div>
          <div className='input_container'>
            <label name="Enter your State">Enter your State</label> <br/>
            <StateSelect
            countryid={101}
            onChange={(e) => {
              setstateid(e.id);
            }}
            placeHolder="Select State"
            />
          </div>
        </div>
        <div className="input_field">
          <div className='input_container'>
            <label name="Enter your City">Enter your City</label> <br/>
            <CitySelect
            countryid={101}
            stateid={stateid}
            onChange={(e) => {
              console.log(e);
            }}
            placeHolder="Select City"
            />
          </div>
          <div className='input_container'>
            <label >
            Degree you are looking for *<br/>
              <select className="degree" name="selecteddegree">
                <option value="doctorate">Doctorate</option>
                <option value="post graduation">Post Graduation</option>
                <option value="graduation">graduation</option>
                <option value="diploma">Diploma</option>
                <option value="certificate">Certificate</option>
              </select>
            </label>
          </div>
        </div>
        <div className="selector">         
        <label> Select course *<br/> </label>
        <input></input>
        </div>
        <div className="checkbox">
          <input type= "checkbox"></input>
          <p>By clicking on the above button, I authorize ISBMU and/or their representative to contact me via Phone, SMS, WhatsApp, and/or email.</p>
        </div>
        <button className="submit" type="submit">Submit</button>
      </div>
    </div>
  );
}

export default Modal;
