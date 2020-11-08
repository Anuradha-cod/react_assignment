import React from "react";
import Image1 from "../images/a1.jpg"
import Image2 from "../images/a2.jpg"
import Image3 from "../images/a3.jpg"
import Image4 from "../images/a4.jpg"
import Image5 from "../images/a5.jpg"
import Image6 from "../images/a6.jpg"
import Image7 from "../images/a7.jpg"
import Image8 from "../images/12.jpg"

export default class Footer extends React.Component {
  render() {
    return (
      
      <div class="img-footer">
        <div class="grid_img">
          <img src={Image1} alt="img" />
          <img src={Image2} alt="img" />
          <img src={Image3} alt="img" />
          <img src={Image4} alt="img" />
          </div>
        <div class="grid_img">
        <img src={Image5} alt="img" />
          <img src={Image6} alt="img" />
          <img src={Image7} alt="img" />
          <img src={Image8} alt="img" />
        </div>

        <div class="info">
         <div class="infobtn">
            <button>PRIVACY POLICY</button>
            <button>TERMS</button>
            <button>FEEDBACK</button>
            <button>ADVERTISE</button>
            <button>CONTACT</button>
          </div>
        </div>
      </div>
    );
  }
}
