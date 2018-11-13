import * as React from 'react';
import { Form, FormGroup, InputGroup, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export interface IDeleteProps {
  id:number,
  itemId:number,
  title:string,
  handleDelete:(evt:any) => void
}

export interface IDeleteState {
  modal: boolean
}

class DeleteButton extends React.Component<IDeleteProps, IDeleteState> {
  
  constructor(props:IDeleteProps) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleConfirmDelete(evt:any) {
    evt.preventDefault();
    this.props.handleDelete(this.props.itemId)
    this.toggle();
  }

  render() {
    return (
      <React.Fragment>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Delete document</ModalHeader>
          <ModalBody>
            Are you sure that you would like to delete this document?
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleConfirmDelete}>Yes, please remove</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Form>
          <FormGroup>
            <InputGroup>
              <Button id={`deleteButton${this.props.id}`} color="danger" onClick={this.toggle}>
                <FontAwesomeIcon icon="trash" title={this.props.title} /> Delete
              </Button>
            </InputGroup>
          </FormGroup>
        </Form>
      </React.Fragment>
    );
  }
}

export default DeleteButton;