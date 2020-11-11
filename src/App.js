import logo from './logo.svg';
import './App.css';
// import Header from './components/header';
// import Main from './components/main';
// import Footer from './components/footer';

import axios from "axios";
import React, {Component } from "react";


class App extends Component{
constructor(props){
  super(props);
  this.state ={
    data : []
  }
}
componentDidMount(){
  axios
  .get("https://jsonplaceholder.typicode.com/todos")
.then(res => {
  return res.data;
})
 .then(
   result => {
     this.setState({ data: result});
   },
   error =>{
     this.setState({ error});
   }
 );

}

render () {
  console.log("RENDER");
  console.log(this.state.data);
  return ( 
    <div className="App my-list">
      <h1>ToDo App</h1>
      {this.state.data && 
      this.state.data.map(e => {
      return<div className={`render ${e.completed == true ? "green":"red"}`} key={e.id}>{e.title}</div>;
      })}
    </div>
  );
}
}
export default App;
