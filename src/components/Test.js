import React from "react";

export class Test extends React.Component {
    render() {
        // console.log(this.props);
        return(
            <div>
                <p>username is: {this.props.name} </p>
                <p>password is: {this.props.password} </p>
            </div>
        );
    }
}