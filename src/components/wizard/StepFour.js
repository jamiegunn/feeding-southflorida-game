import React, { Component } from "react";
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Container,
    Row,
    Col,
    UncontrolledPopover,
    PopoverHeader,
    PopoverBody
} from "reactstrap";

class StepFour extends Component {
    render() {
        console.log('this.props.context', this.props.context);
		var FinalMessage = "";
		if (this.props.remainingBudget < 0 || this.props.caloriesRemaining > 0) { 
				FinalMessage = "I'm sorry " + this.props.gamerName + "! "
				if (this.props.remainingBudget < 0) FinalMessage += "You exceeded your budget. " 
				else FinalMessage += "You did not provide sufficient calories to sustain your family. " 
				FinalMessage += "Have you contacted Feeding South Florida?  Through the generous contributions of their supporters they provided 99 million meals in the last year. "
		} else {
				FinalMessage = "Congratulations " + this.props.gamerName + "! You stayed within your budget and purchased enough food for our family. "
		}		
		
        return (
            <Container>
                <Row>
                    <Col>
					
					{FinalMessage}	<br></br>
                            Total Spend: ${this.props.totalSpend}<br></br>
                            Remaining Budget: ${this.props.remainingBudget}<br></br>
                            Calories Purchased: {this.props.caloriesPurchased}<br></br>
                            Calories Remaining: {this.props.caloriesRemaining}<br></br>
                    </Col>
                </Row>


            </Container>
        );
    }
}

export default StepFour;
