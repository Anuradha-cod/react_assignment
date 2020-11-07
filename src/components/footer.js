import React from "react";
export default class Footer extends React.Component {
  render() {
    return (
      <div class="img-footer">
        <div class="grid_img">
          <img src="../images/a2.jpg" alt="img" />
          <img src="./a3.jpg" alt="img" />
          <img src="./a4.jpg" alt="img" />
          <img src="./a3.jpg" alt="img" />
        </div>
        <div class="grid_img">
          <img src="./a5.jpg" alt="img" />
          <img src="./a6.jpg" alt="img" />
          <img src="./a7.jpg" alt="img" />
          <img src="./a2.jpg" alt="img" />
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
