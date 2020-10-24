import React, { Component } from 'react';
import StepWizard from 'react-step-wizard';
import StepOne from './wizard/StepOne';
import StepTwo from './wizard/StepTwo';
import CoolNav from './CoolNav';
import duix from 'duix';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            price: 0
        };
    }

    componentDidMount() {   
     
    }

    callback(value, context){
        const price = context.state.price + value;
        
        context.setState({
            price: price
        })
    }


    render() {      
        
        return (
            <div style={{ marginTop: 20 }}>
                <Container>
                    <Row>
                        <Col md="3">
                            <div className="border" style={{ height: '100%' }}>
                                <CardBody>
                                    <CardTitle>Summary Running Detail</CardTitle>
                                    <CardBody><span>{this.state.price}</span></CardBody>
                                    <Button>Button 1</Button>
                                </CardBody>
                            </div>
                        </Col>
                        <Col md="9">
                            <div className="border" style={{ height: '100%' }}>
                                <StepWizard nav={<CoolNav />}>
                                    <StepOne callback={this.callback} context={this} />
                                    <StepTwo />
                                </StepWizard>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="3">
                            <div className="border" style={{ height: '100%', marginTop: 20 }}>
                                <CardBody>
                                    <CardTitle>Family Info / Who Goes Hungry</CardTitle>
                                    <Button>Button 1</Button>
                                </CardBody>
                            </div>
                        </Col>
                        <Col md="9">
                            <div className="border" style={{ height: '100%', marginTop: 20 }}>
                                <CardBody>
                                    <CardTitle>Did you know?</CardTitle>
                                    <Button>Button 1</Button>
                                </CardBody>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default HomePage;
