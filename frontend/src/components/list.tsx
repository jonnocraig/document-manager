import * as React from 'react';
import { Table } from 'reactstrap';
import { IDocument } from '../types';
import DeleteButton from '../components/deleteButton';

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
            <td><DeleteButton id={i} itemId={doc.id} handleDelete={props.handleDelete} title="Delete document" /></td>
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