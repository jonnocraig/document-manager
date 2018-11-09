import * as React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

export interface ISearchProps {
  filter:string,
  handleFilter:(evt:any) => void
}

const List = (props:ISearchProps) => (
  <Form>
    <FormGroup>
      <Label for="filterDocuments">Filter</Label>
      <Input type="text" id="filterDocuments" placeholder="Search by name or type" value={props.filter} onChange={props.handleFilter}/>
    </FormGroup>
  </Form>
);

export default List;