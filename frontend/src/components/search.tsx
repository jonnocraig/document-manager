import * as React from 'react';
import { Form, FormGroup, InputGroup, InputGroupAddon, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './search.css';

export interface ISearchProps {
  filter:string,
  handleFilter:(evt:any) => void
}

const List = (props:ISearchProps) => (
  <Form>
    <FormGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend"><FontAwesomeIcon icon="search" title="Search" /></InputGroupAddon>
        <Input type="text" id="filterDocuments" placeholder="Search by name or type" value={props.filter} onChange={props.handleFilter}/>
      </InputGroup>
    </FormGroup>
  </Form>
);

export default List;