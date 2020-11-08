import react, { Component } from "react";
import Block from "./block"
import data from "../data.json"
import Aside from "./aside";

class Main extends Component {
  render() {
    return (
        <main>
        <div className="container">
            {data.map(ele=>(
              <Block items={ele} key={ele.id}/>
            ))}
        </div>
        <Aside/>
        </main>
    )
}
}
export default Main;