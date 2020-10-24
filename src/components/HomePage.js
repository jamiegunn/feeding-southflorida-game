import React, { Component } from "react";
import StepWizard from "react-step-wizard";
import StepOne from "./wizard/StepOne";
import StepTwo from "./wizard/StepTwo";
import CoolNav from "./CoolNav";

class HomePage extends Component {
  render() {
    return (
      <StepWizard nav={<CoolNav />}>
        <StepOne />
        <StepTwo />
      </StepWizard>
    );
  }
}

export default HomePage;
