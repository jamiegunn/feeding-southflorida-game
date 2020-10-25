import React, { Component } from 'react';
import StepWizard from 'react-step-wizard';
import StepOne from './wizard/StepOne';
import StepTwo from './wizard/StepTwo';
import StepThree from './wizard/StepThree';
import StepFour from './wizard/StepFour';
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

        const numAdults = Math.random() + 0.5; 
        const numKids = Math.random() * 5; 		

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

        const totalCaloricNeeds = (adultCals + kidsCals) * 7;

        this.state = { totalSpend: 0, gamerName: 'Unknown', remainingBudget:0,  caloriesRemaining:0, caloriesPurchased:0, totalCaloricNeeds: totalCaloricNeeds, price: 0, showModal: true, jobs: Jobs, names: Names, adultsModal: adultsModal, kidsModal:kidsModal, adultCals:adultCals, kidsCals: kidsCals };
    }

    callback(cost, calories, context){
		
        var familySize = context.state.adultsModal.length + context.state.kidsModal.length; 
        const totalSpend = context.state.totalSpend + (cost * 7 * familySize);
        const caloriesPurchased = context.state.caloriesPurchased + (calories * 7 * familySize);
        const caloriesRemaining = context.state.totalCaloricNeeds - caloriesPurchased;
        const remainingBudget = context.state.remainingBudget - (cost * 7 * familySize); 
		console.log('familySize', familySize);	

        context.setState({
            totalSpend: totalSpend,
            caloriesPurchased: caloriesPurchased,
            caloriesRemaining: caloriesRemaining,
            remainingBudget: remainingBudget
        })
    }

    modalCallback(c, foodBudget, gamerName){  
	var coinFlip = Math.random() * 10;
	var extraMoney = 1;
	if (coinFlip%2==0) extraMoney=2;
	
        c.setState({
            showModal: false,
            remainingBudget: foodBudget * extraMoney, 
            caloriesRemaining: c.state.totalCaloricNeeds - c.state.caloriesPurchased,
            gamerName: gamerName
          });
    }

    render() {      
        if(this.state.showModal){
            return (
                <ModalPage names = {this.state.names} jobs = {this.state.jobs} adultCals = {this.state.adultCals} kidsCals ={this.state.kidsCals} adultsModal = {this.state.adultsModal} kidsModal={this.state.kidsModal} callback={this.modalCallback} context={this}></ModalPage>
                );
        } else {
        return (
            <div style={{ marginTop: 20,marginBottom: 150 }}>
                <Container>
                    <Row>
                        <Col md="4">
                            <div className="border" style={{ height: '100%' }}>
                                <CardBody>
                                    <CardTitle>Summary Running Detail</CardTitle>
                                    <CardBody>
                                    Total Spent: ${this.state.totalSpend}<br></br>
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
                                    <StepFour gamerName = {this.state.gamerName} totalSpend = {this.state.totalSpend} remainingBudget = {this.state.remainingBudget} caloriesPurchased = {this.state.caloriesPurchased} caloriesRemaining = {this.state.caloriesRemaining} context={this} />
                                </StepWizard>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="4">
                            <div className="border" style={{ height: '100%', marginTop: 20 }}>
                                <CardBody>
                                    <CardTitle>Our Family</CardTitle>
                  Our family unit has {this.state.adultsModal.length} adults with daily caloric needs of {this.state.adultCals}.<br></br>
                  Our family unit has {this.state.kidsModal.length} kids with daily caloric needs of {this.state.kidsCals}.<br></br><br></br>
									
                                    <Button onClick={() => {
                                        
										window.history.go(0);
                                        this.setState({
                                            showModal: true
                                          });

                                        }}>Start Over</Button>&nbsp; 
                                </CardBody>
                            </div>
                        </Col>
                        <Col md="8">
                            <div className="border" style={{ height: '100%', marginTop: 20 }}>
                                <CardBody>
                                    <CardTitle>Did you know?</CardTitle>
									<ul>
									<li>Every $1 = 9 meals!</li>
									<li>Because of COVID-19, Feeding South Florida is serving an estimated 1.4 million people who are food insecure</li>
									<li>1 in 5 adults and 1 in 4 children in South Florida (Palm Beach, Broward, Miami-Dade, and Monroe) are food insecure.</li>
									<li>We distributed 119 million pounds of food (over 99 million meals!) in the last year.</li>
									<li>Over 40% of people seeking help since COVID-19 began are doing so for the first time.</li>
									<li>Learn more at <a href ="https://www.feedingsouthflorida.org" target = "_blank">www.feedingsouthflorida.org</a>!</li>
									</ul>
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
