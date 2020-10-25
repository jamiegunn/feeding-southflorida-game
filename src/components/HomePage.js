import React, { Component } from 'react';
import StepWizard from 'react-step-wizard';
import StepOne from './wizard/StepOne';
import StepTwo from './wizard/StepTwo';
import StepThree from './wizard/StepThree';
import CoolNav from './CoolNav';
import ModalPage from './ModalPage';
import { CardBody, CardTitle, Button, Container, Row, Col } from 'reactstrap';
import People from '../data/people.json';
import Food from '../data/food.json';
import Jobs from '../data/jobs.json';
import Names from '../data/names.json';

class HomePage extends Component {

    constructor(props) {
        super(props);
        
        const adults = People.map(user => { if(user.age >= 18) return user; }).filter(el => { return el !== null && el !== '' && el !== undefined; });
        const kids = People.map(user => { if(user.age < 18) return user; }).filter(el => { return el !== null && el !== '' && el !== undefined; });

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

        const totalCaloricNeeds = adultCals + kidsCals;

        this.state = { totalSpend: 0, remainingBudget:0,  caloriesRemaining:0, caloriesPurchased:0, totalCaloricNeeds: totalCaloricNeeds, price: 0, showModal: true, jobs: Jobs, names: Names, adultsModal: adultsModal, kidsModal:kidsModal, adultCals:adultCals, kidsCals: kidsCals };
    }

    callback(cost, calories, context){
        
        const totalSpend = context.state.totalSpend + cost;
        const caloriesPurchased = context.state.caloriesPurchased + calories;
        const caloriesRemaining = context.state.totalCaloricNeeds - caloriesPurchased;
        const remainingBudget = context.state.remainingBudget - totalSpend; 


        context.setState({
            totalSpend: totalSpend,
            caloriesPurchased: caloriesPurchased,
            caloriesRemaining: caloriesRemaining,
            remainingBudget: remainingBudget
        })
    }

    modalCallback(c, foodBudget){       
        c.setState({
            showModal: false,
            remainingBudget: foodBudget, 
            caloriesRemaining: c.state.totalCaloricNeeds - c.state.caloriesPurchased
          });
    }

    render() {      
        if(this.state.showModal){
            return (
                <ModalPage names = {this.state.names} jobs = {this.state.jobs} adultCals = {this.state.adultCals} kidsCals ={this.state.kidsCals} adultsModal = {this.state.adultsModal} kidsModal={this.state.kidsModal} callback={this.modalCallback} context={this}></ModalPage>
                );
        } else {
        return (
            <div style={{ marginTop: 20 }}>
                <Container>
                    <Row>
                        <Col md="4">
                            <div className="border" style={{ height: '100%' }}>
                                <CardBody>
                                    <CardTitle>Summary Running Detail</CardTitle>
                                    <CardBody>
                                    Total Spend: ${this.state.totalSpend}<br></br>
                                    Remaining Budget: ${this.state.remainingBudget}<br></br>
                                    Calories Purchased: {this.state.caloriesPurchased}<br></br>
                                    Calories Remaining: {this.state.caloriesRemaining}<br></br>
                                    </CardBody>
                                </CardBody>
                            </div>
                        </Col>
                        <Col md="8">
                            <div className="border" style={{ height: '100%' }}>
                                <StepWizard nav={<CoolNav />}>
                                    <StepOne food={Food} callback={this.callback} context={this} />
                                    <StepTwo food={Food} callback={this.callback} context={this} />
                                    <StepThree food={Food} callback={this.callback} context={this} />
                                </StepWizard>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="4">
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
                        <Col md="8">
                            <div className="border" style={{ height: '100%', marginTop: 20 }}>
                                <CardBody>
                                    <CardTitle>Did you know?</CardTitle>
                                    <a href ="https://feedingsouthflorida.org/donate-now/" target = "_blank" class="btn">Donate Now!</a>
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
