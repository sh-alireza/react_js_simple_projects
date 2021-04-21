import React from "react";
import './Counter.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter : props.counter,
            is_finished : false,
        }
        this.handler = setInterval(this.updateCounter,1000);
    }
    updateCounter = () => {
        this.setState({
            counter: this.state.counter - 1,
        })
        if (this.state.counter <= 0){
            clearInterval(this.handler)
            this.setState({
                is_finished : true,
            })
        }
    }

    plusFunction = () => {
        this.setState({
            counter : this.state.counter + 1,
            is_finished : false,
        })
    }
    minusFunction = () => {
        this.state.counter > 0 &&
        this.setState({
            counter : this.state.counter - 1,
        })
    }
    render() {
        return (
            <div className="counter">
                <div className="counter-num">{(this.state.is_finished && "F I N I S H E D" ) || this.state.counter}</div>
                <div className="counter-btn">
                    <button onClick={this.plusFunction}>+</button>
                    <button onClick={this.minusFunction}>-</button>
                </div>
            </div>
        );
    }
}
export default Counter;