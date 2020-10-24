import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class ModalPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {   
     
    }

    render() {      

        console.log(this.props.adultsModal);
        console.log(this.props.kidsModal);

        return  (
            <div style={{height:100, width:100}}>
              <Modal isOpen={true} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}>
                <ModalHeader>Family Info</ModalHeader>
                <ModalBody>
                  Our family unit has {this.props.adultsModal.length} adults with caloric needs of {this.props.adultCals}.<br></br>
                  Our family unit has {this.props.kidsModal.length} kids with caloric needs of {this.props.kidsCals}.<br></br>

                </ModalBody>
                <ModalFooter>
                <Button color = "primary" onClick={() => {
                            this.props.callback(this.props.context)
                        }}>Ok</Button>&nbsp;
                </ModalFooter>
              </Modal>
            </div>
          );
    }
}
export default ModalPage;
