import React, { Component } from 'react';
import StepWizard from 'react-step-wizard';
import StepOne from './wizard/StepOne';
import StepTwo from './wizard/StepTwo';
import CoolNav from './CoolNav';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

class HomePage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="3">
                        <div class="border" style={{ height: '100%' }}>
                            <CardBody>
                                <CardTitle>Summary Running Detail</CardTitle>
                                <Button>Button 1</Button>
                            </CardBody>
                        </div>
                    </Col>
                    <Col md="9">
                        <div class="border" style={{ height: '100%' }}>
                            <StepWizard nav={<CoolNav />}>
                                <StepOne />
                                <StepTwo />
                            </StepWizard>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md="3">
                        <div class="border" style={{ height: '100%', marginTop: 20 }}>
                            <CardBody>
                                <CardTitle>Family Info / Who Goes Hungry</CardTitle>
                                <Button>Button 1</Button>
                            </CardBody>
                        </div>
                    </Col>
                    <Col md="9">
                        <div class="border" style={{ height: '100%', marginTop: 20 }}>
                            <CardBody>
                                <CardTitle>Did you know?</CardTitle>
                                <Button>Button 1</Button>
                            </CardBody>
                        </div>
                    </Col>
                </Row>

            </Container>
        );
    }
}
export default HomePage;
