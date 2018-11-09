import * as React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export interface IUploadButtonProps {
  handleUpload:(evt:any) => void
}

const UploadButton = (props:IUploadButtonProps) => (
  <Form>
    <FormGroup>
      <Label for="uploadDocument">Upload</Label>
      <Input type="file" name="file" id="uploadDocument" onChange={props.handleUpload} />
    </FormGroup>
  </Form>
);

export default UploadButton;