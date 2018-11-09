import * as React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './uploadButton.css';

export interface IUploadButtonProps {
  handleUpload:(evt:any) => void
}

const UploadButton = (props:IUploadButtonProps) => (
  <Form>
    <FormGroup>
      <Label for="uploadDocument">Add document</Label>
      <div className="file-input-wrapper">
        <Input type="file" name="file" id="uploadDocument" onChange={props.handleUpload} />
        <Button color="success">Upload</Button>
      </div>
    </FormGroup>
  </Form>
);

export default UploadButton;