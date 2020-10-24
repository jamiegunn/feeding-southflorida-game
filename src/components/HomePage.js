import React, { Component } from 'react';
import StepWizard from 'react-step-wizard';
import StepOne from './wizard/StepOne';
import StepTwo from './wizard/StepTwo';
import StepThree from './wizard/StepThree';
import CoolNav from './CoolNav';
import ModalPage from './ModalPage';
import { CardBody, CardTitle, Button, Container, Row, Col } from 'reactstrap';
import People from '../data/people.json'

class HomePage extends Component {

    constructor(props) {
        super(props);
        
        const adults = People.map(user => { if(user.age >= 18) return user; }).filter(el => { return el !== null && el !== ''; });
        const kids = People.map(user => { if(user.age < 18) return user; }).filter(el => { return el !== null && el !== ''; });

        const numAdults = Math.random() * (5 - 1) + 1; 
        const numKids = Math.random() * (5 - 1) + 1; 

        let adultsModal = [];
        let kidsModal = [];

        for(var i = 0; i < numAdults; i++){
            var item = adults[Math.floor(Math.random() * adults.length)];
            adultsModal.push(item);
        }

        for(var i = 0; i < numKids; i++){
            var item = kids[Math.floor(Math.random() * kids.length)];
            kidsModal.push(item);
        }

        let adultCals = 0;
        adultsModal.map(adult => { if(adult && adult.caloricRequirements) adultCals += adult.caloricRequirements });

        let kidsCals = 0;
        kidsModal.map(kid => { if(kid && kid.caloricRequirements) kidsCals += kid.caloricRequirements });

        this.state = { price: 0, showModal: true, adultsModal: adultsModal, kidsModal:kidsModal, adultCals:adultCals, kidsCals: kidsCals };
    }

    callback(value, context){
        const price = context.state.price + value;
        
        context.setState({
            price: price
        })
    }

    modalCallback(c){       
        c.setState({
            showModal: false
          });
    }

    render() {      
        console.log('this.state.showModal', this.state.showModal);

        if(this.state.showModal){
            return (
                <ModalPage adultCals = {this.state.adultCals} kidsCals ={this.state.kidsCals} adultsModal = {this.state.adultsModal} kidsModal={this.state.kidsModal} callback={this.modalCallback} context={this}></ModalPage>
                );
        } else {
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
                                    <Button onClick={() => {
                                        
                                        this.setState({
                                            showModal: true
                                          });

                                        }}>Show My Family</Button>&nbsp; 
                                </CardBody>
                            </div>
                        </Col>
                        <Col md="9">
                            <div className="border" style={{ height: '100%', marginTop: 20 }}>
                                <CardBody>
                                    <CardTitle>Did you know?</CardTitle>
                                    <a href ="https://feedingsouthflorida.org/donate-now/" target = "_blank">Donate Now!</a>
                                </CardBody>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
    }
}
export default HomePage;
