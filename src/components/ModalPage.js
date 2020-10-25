import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ModalPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {   
     
    }

    render() {      

        const males = this.props.names.map(user => { if(user.gender === 'Male') return user; }).filter(el => { return el !== null && el !== '' && el !== undefined; });
        const females = this.props.names.map(user => { if(user.gender === 'Male') return user; }).filter(el => { return el !== null && el !== '' && el !== undefined; });

        let name = '';
        var x= Math.random();
        if(x === 0) {
          var item = males[Math.floor(Math.random() * males.length)];
          name = item.name;
        } else {
          var item = males[Math.floor(Math.random() * females.length)];
          name = item.name;
        }

        let jobItem = this.props.jobs[Math.floor(Math.random() * this.props.jobs.length)];

        return  (
            <div style={{height:100, width:100}}>
              <Modal isOpen={true} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}>
                <ModalHeader>Family Info</ModalHeader>
                <ModalBody>
                  Welcome, {name} <br></br>
                  You are a {jobItem.JobTitle} with a salary of ${jobItem.Salary} and a weekly food budget of ${jobItem.FoodBudget}<br></br><br></br>
                  Our family unit has {this.props.adultsModal.length} adults with daily caloric needs of {this.props.adultCals}.<br></br>
                  Our family unit has {this.props.kidsModal.length} kids with daily caloric needs of {this.props.kidsCals}.<br></br>

				<br></br><hr></hr><br></br>
				
				Welcome to the Hunger 101 | Market Mania Digital Experience!<br></br><br></br>

				Designed exclusively for Feeding South Florida, this unique shopping experience places you directly in a day-in-the-life of a family grocery shopping on a limited budget while still trying to provide nutritious meals for their family.<br></br><br></br>

				You will be randomly assigned a scenario and will be given the opportunity to choose representative meals for your week's worth of groceries.<br></br><br></br>

				We hope this experience will help drive perception-changing conversations and support for those living with food insecurity.<br></br>
				
				

                </ModalBody>
                <ModalFooter>
                <Button color = "primary" onClick={() => {
                            this.props.callback(this.props.context, jobItem.FoodBudget, name)
                        }}>&nbsp;Ok&nbsp;</Button>&nbsp;
                </ModalFooter>
              </Modal>
            </div>
          );
    }
}
export default ModalPage;
