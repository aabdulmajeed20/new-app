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
  state = {username: "", password:"", result: "Failed"}
  
  submit(event){
    event.preventDefault();
    for(var i = 0; i<3; i++){
     if(this.state.username === users[i].name && this.state.password === users[i].pass){
      this.setState({result: "Success"});
      break;
     }
    else{
      this.setState({result: "Failed"})
    }
    }
  }
  change(event) {
    this.setState({username: event.target.value});
    this.setState({password: event.target.value});
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
            <lable for="usr">Username: </lable>
            <input type="text" className="form-control" id="usr" value={this.state.username} onChange={(event) => this.setState({username: event.target.value})} placeholder="Enter your name" />
          </div>
          </div>
          <br/>
          <div className="row" style={style.div} >
            <div className="col-xs-4" ></div>
          <div className="col-xs-4" >
            <lable for="pwd">Password: </lable>
            <input type="password" className="form-control" id="pwd" value={this.state.password} onChange={(event) => this.setState({password: event.target.value})} placeholder="Enter your password" />
          </div>
          </div>
          <br/>
          <div> <input className="btn btn-primary" type="submit" value="Submit" /> </div>
        </form>
        
          <br/>
          {this.state.result}
          <br/>
          <Test name={this.state.username} password={this.state.password}  />
      
      </div>
    );
  }
}
const style = {
  div : {padding: 10}
}
export default App;
