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
} from "reactstrap";

class StepOne extends Component {
    render() {
        return (
        <Container>
            <Row>
            <Col>
                <Card>
                    <CardImg width = "100%" src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button onClick={() => this.props.goToStep(2)}>Button 1</Button>&nbsp; 
                        <Button onClick={() => this.props.goToStep(2)}>Button 2</Button>
                    </CardBody>
                </Card>
            </Col>

            <Col>
                <Card>
                    <CardImg width = "100%" src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button onClick={() => this.props.goToStep(2)}>Button 1</Button>&nbsp; 
                        <Button onClick={() => this.props.goToStep(2)}>Button 2</Button>
                    </CardBody>
                </Card>
            </Col>

            <Col>
                <Card>
                    <CardImg width = "100%" src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                        <Button onClick={() => this.props.goToStep(2)}>Button 1</Button>&nbsp; 
                        <Button onClick={() => this.props.goToStep(2)}>Button 2</Button>
                    </CardBody>
                </Card>
            </Col>
            </Row>

           
            </Container>
        );
    }
}

export default StepOne;
