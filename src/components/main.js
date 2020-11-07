import react, { Component } from "react";
import Block from "./block"
import data from "../data.json"
class Main extends Component {
  render() {
    return (
        <div className="container">
            {data.map(ele=>(
              <Block items={ele} key={ele.id}/>
            ))}
        </div>
    )
}
}
export default Main;