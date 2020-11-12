import logo from './logo.svg';
import './App.css';
// import Header from './components/header';
// import Main from './components/main';
// import Footer from './components/footer';

import axios from "axios";
import React, {Component } from "react";


class App extends Component{
// constructor(props){
//   super(props);
//   this.state ={
//     data : []
//   }
// }
state = {
  data: []
}

async componentDidMount(){
  try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    res = res.data;
    this.setState({ data: res});
  } catch(error){
    this.setState({error});
  }
//   axios
//   .get("https://jsonplaceholder.typicode.com/todos")
// .then(res => {
//   return res.data;
// })
//  .then(
//    result => {
//      this.setState({ data: result});
//    },
//    error =>{
//      this.setState({ error});
//    }
//  );
}
onClick = ele => {
  console.log(ele);
 let index = this.state.data.map(e=> e.title ).indexOf(ele.title)
this.setState({data : [
  ...this.state.data.slice(0, index),
  ...this.state.data.slice( index +1)
]
});
};

updatStatus = e => {
  let index = this.state.data.map(e=>e.title).indexOf(e.title);
  const obj = this.state.data[index];
  obj.completed = true;
  this.setState({
    data: [
      ...this.state.data.slice(0, index),
      obj,
      ...this.state.data.slice(index + 1)
    ]
  })
}

render () {
  console.log("RENDER");
  console.log(this.state.data);
  return ( 
    <div className="App my-list">
      <h1>ToDo App</h1>
      <input></input>
<button>ADD</button>
      {this.state.data && 
      this.state.data.map(e => {
      return <div className={`render ${e.completed == true ? "green":"red"}`} key={e.id}>
        
        <span>{e.title}</span>
        <span>
        <span> <button onClick={() => this.onClick(e)}>Del</button></span>
        <span><button onClick={() => this.updatStatus(e)}>Done</button></span>
        </span>
        </div>;
      })}
    </div>
  );
}
}
export default App;
