import react, { Component } from "react";

const  navArr = ["Home", "Posts", "Components"];

class Header extends Component {
  render() {
    return (
        <nav className="nav_links">
          <ul>
           {navArr.map((ele, inx)=>{
             return(
               <li key={inx}>
               <a className="down_arrow" href="#">
               {ele}
               </a>
               </li>
               )
           })}
          </ul>
          <p className="heading">milo</p>
          <ul>
            <li>About</li>
            <li>Contact</li>
            <li>
              <input className="search" placeholder="Search..." />
            </li>
          </ul>
        </nav>
    );
  }
}

 export default Header;
