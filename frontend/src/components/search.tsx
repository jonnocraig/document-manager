import * as React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export interface ISearchProps {
  filter:string,
  handleFilter:(evt:any) => void
}

const List = (props:ISearchProps) => (
  <Form>
    <FormGroup>
      <Label for="filterDocuments">Search</Label>
      <Input type="text" id="filterDocuments" placeholder="Enter search term here..." value={props.filter} onChange={props.handleFilter}/>
    </FormGroup>
  </Form>
);

export default List;