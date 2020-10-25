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

class StepOne extends Component {
    render() {
        console.log('this.props.context', this.props.context);
        return (
            <Container>
                <Row>
                    <Col>
                            Hello {this.props.gamerName}<br></br>
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

export default StepOne;
