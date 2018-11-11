import * as React from 'react';
import { Table, Button  } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IDocument } from '../types';

export interface ITableProps {
  documents:IDocument[] | null,
  filter:string,
  handleDelete:(id:number) => void
}

const List = (props:ITableProps) => (
  <React.Fragment>
  { props.documents && props.documents.length ?
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Size</th>
          <th>Extension</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { props.documents.map((doc, i) =>
          <tr key={i}>
            <td>{i+1}</td>
            <td>{doc.originalFilename} <em>(created: {doc.created_at})</em></td>
            <td>{doc.fileSize} KB</td>
            <td>{doc.fileExtension}</td>
            <td><Button id={`deleteButton${i}`} color="danger" onClick={() => props.handleDelete(doc.id)}><FontAwesomeIcon icon="trash" title="Delete dcoument" /> Delete</Button></td>
          </tr>
        )}
      </tbody>
    </Table> : 
    props.filter && props.filter !== '' ?
    <p>No results found!</p> :
    <p>Such empty? Upload a new document by clicking the Upload button above</p>
  }
  </React.Fragment>
);

export default List;