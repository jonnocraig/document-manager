import * as React from 'react';
import { Form, FormGroup, InputGroup, Input, Button } from 'reactstrap';
import './uploadButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export interface IUploadButtonProps {
  handleUpload:(evt:any) => void
}

const UploadButton = (props:IUploadButtonProps) => (
  <Form>
    <FormGroup>
      <InputGroup>
        <div className="file-input-wrapper">
          <Input type="file" name="file" id="uploadDocument" onChange={props.handleUpload} />
          <Button color="success"><FontAwesomeIcon icon="file-upload" /> Upload</Button>
        </div>
      </InputGroup>
    </FormGroup>
  </Form>
);

export default UploadButton;