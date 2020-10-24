import React, { Component, useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {   
     
    }

    render() {      
        return  (
            <div style={{height:100, width:100}}>
              <Modal isOpen={true} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}>
                <ModalHeader>Family Info</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
