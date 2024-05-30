import React, { Component } from "react";

class AutomaticCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log("Constructor!");
    }

    timerTick = ()=> {
        console.log("timerTick fired: "+ this.state.count);
        this.setState((prevState) =>{
            return {
                count: prevState.count + 1
            };
        });
    }
    componentDidMount() {
        console.log("ComponentDidMount!");
        this.timer = setInterval(this.timerTick, 1000);
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}

export default AutomaticCounter;