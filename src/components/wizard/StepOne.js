import React, { Component } from "react";
import { Button } from "reactstrap";

class StepOne extends Component {
  render() {
    return (
      <div>
        <h2>Step {this.props.currentStep}</h2>
        <p>Total Steps: {this.props.totalSteps}</p>
        <p>Is Active: {this.props.isActive}</p>
        <p>
          <Button color="danger" onClick={this.props.previousStep}>
            Previous Step
          </Button>
        </p>
        <p>
          <button onClick={this.props.nextStep}>Next Step</button>
        </p>
        <p>
          <button onClick={() => this.props.goToStep(2)}>Step 2</button>
        </p>
        <p>
          <button onClick={this.props.firstStep}>First Step</button>
        </p>
        <p>
          <button onClick={this.props.lastStep}>Last Step</button>
        </p>
      </div>
    );
  }
}

export default StepOne;
