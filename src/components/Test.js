import React from "react";

export class Test extends React.Component {
    constructor(props) {
        super();
        this.state = { change: "changed" }
    }
    // onHandleChanged() {
    //     this.setState({ change: event.target.value });
    // }

    someChange() {
        this.props.change(this.state.change);
    }
    render() {


        return (
            <div>
                <p>username is: {this.props.name} </p>
                <p>password is: {this.props.password} </p>
                <input type="text" onChange={(event) => this.setState({ change: event.target.value })} />
                <button onClick={this.someChange.bind(this)} className="btn btn-primary" >Make some changes</button>
            </div>
        );
    }
}