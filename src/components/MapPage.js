import React, { Component } from 'react';
import StepWizard from 'react-step-wizard';
import StepOne from './wizard/StepOne';
import StepTwo from './wizard/StepTwo';
import CoolNav from './CoolNav';
import duix from 'duix';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

class MapPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            price: 0
        };
    }

    componentDidMount() {   
     
    }

    


    render() {      
        
        return (
            <div style={{ marginTop: 20 }}>
                <Container>
                    <Row>
                        <Col md="3">
                            I'm a map
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
export default MapPage;
