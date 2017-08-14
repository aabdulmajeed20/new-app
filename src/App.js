import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Test } from "./components/Test";

  const users = [
    {name: "majeed", pass: "12345"},
    {name: "sami", pass: "45678"},
    {name: "saad", pass: "112233"}
  ];
class App extends Component {
  constructor() {
    super();
    this.state = {username: "", password:"", result: "Failed", change: "Default"};
  }

  someChange(changed) {
    this.setState({change: changed});
  }
  
  submit(event){
    event.preventDefault();
    for(var i = 0; i<3; i++){
     if(this.state.username === users[i].name && this.state.password === users[i].pass){
      this.setState({result: "Success"});
      break;
     }
    else{
      this.setState({result: "Failed"});
    }
    }
    this.printResult();
  }
  printResult(){
    alert("Your login is " + this.state.result);
  }
  
  render() {
    // array.map( item =>{ if(item.name === user) this.setState({})})
  
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <br/>
        <form className="form-group" onSubmit={this.submit.bind(this)} >
          <div className="row" style={style.div} >
            <div className="col-xs-4" ></div>
          <div className="col-xs-4" >
            <lable for="usr"><h3>Username:</h3> </lable>
            <input type="text" className="form-control" id="usr" value={this.state.username} onChange={(event) => this.setState({username: event.target.value})} placeholder="Enter your name" />
          </div>
          </div>
          <br/>
          <div className="row" style={style.div} >
            <div className="col-xs-4" ></div>
          <div className="col-xs-4" >
            <lable for="pwd"><h3>Password: </h3></lable>
            <input type="password" className="form-control" id="pwd" value={this.state.password} onChange={(event) => this.setState({password: event.target.value})} placeholder="Enter your password" />
          </div>
          </div>
          <br/>
          <div> <input className="btn btn-primary" type="submit" value="Submit" /> </div>
        </form>

          <Test name={this.state.username} password={this.state.password} change={this.someChange.bind(this)} />
          <p>There is testing on: {this.state.change}</p>
      
      </div>
    );
  }
}
const style = {
  div : {padding: 10}
}
export default App;
