import React, { Component } from "react";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 4
        }
    }

    isEven = (val) => val % 2 === 0 ? "Even" : "Odd";

    getClassName(val) {
        return val % 2 === 0
            ? "bg-primary text-white text-center p-2 m-1"
            : "bg-secondary text-white text-center p-2 m-1";
    }

    handleClick = () => {
        this.setState({count: ++this.state.count})
    }

    render = () =>
        <div className="container-fluid p-4">
            <div className="row bg-info text-white p-2">
                <div className="col font-weight-bold">Value</div>
                <div className="col-6 font-weight-bold">Even?</div>
            </div>
            <div className="row bg-light border p-2">
                <div className="col">{ this.state.count }</div>
                <div className="col-6">{ this.isEven(this.state.count)} </div>
            </div>
            <div className="row">
                <div className="col">
                    <button className="btn btn-info m-2" onClick={ this.handleClick }>
                        Click Me
                    </button>
                </div>
            </div>
        </div>
}
export default App;
