import React, { Component } from 'react'

export default class Greeting extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            submitted : false
        };


    }


    handleChange = (event) =>{
        this.setState ({name : event.target.value});
    }

    handleSubmit = () => {
        this.setState({ submitted: true });
      };

      componentWillUnmount() {
        alert(`Bye ${this.state.name || "Guest"}`);
      }

        componentDidMount() {
            alert(`Welcome ${this.state.name || "Guest"}`);
        }

  render() {

    const { name, submitted } = this.state;
    return (
        <div className="card p-4 shadow-sm">
          {!submitted ? (
            <>
            <div className="greet"> 
                 <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter your name"
                onChange={this.handleChange}
              />
              <button className="btn " onClick={this.handleSubmit}>
                click
              </button>

              </div>
            </>
          ) : (
            <>
              <h3 className="mb-3">Hello {name || "Guest"}!!</h3>
              <button className="greet" onClick={this.props.unmount}>
                Unmount 
              </button>
            </>
          )}
        </div>
      );
  }
}
