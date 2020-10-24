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
<<<<<<< HEAD
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
                        <Button>Button 1</Button>&nbsp; 
                        <Button>Button 2</Button>
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
                        <Button>Button 1</Button>&nbsp; 
                        <Button>Button 2</Button>
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
                        <Button>Button 1</Button>&nbsp; 
                        <Button>Button 2</Button>
                    </CardBody>
                </Card>
            </Col>
            </Row>

           
            </Container>
        );
    }
=======
  render() {
    return (
      <Container>
        <Row>
          <Col xs="3">
            <Card>
              <CardImg
                width="100%"
                src="https://reactstrap.github.io/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button 1</Button>&nbsp;
                <Button>Button 2</Button>
              </CardBody>
            </Card>
          </Col>

          <Col xs="3">
            <Card>
              <CardImg
                width="100%"
                src="https://reactstrap.github.io/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button 1</Button>&nbsp;
                <Button>Button 2</Button>
              </CardBody>
            </Card>
          </Col>

          <Col xs="3">
            <Card>
              <CardImg
                width="100%"
                src="https://reactstrap.github.io/assets/318x180.svg"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </CardText>
                <Button>Button 1</Button>&nbsp;
                <Button>Button 2</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs="3">
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
          </Col>
        </Row>
      </Container>
    );
  }
>>>>>>> 43036637e6641111c113cce65f494e25e9dbd365
}

export default StepOne;
