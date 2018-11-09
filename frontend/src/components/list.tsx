import * as React from 'react';
import { Table, Button  } from 'reactstrap';
import { IDocument } from '../types';

export interface ITableProps {
  documents:IDocument[] | null,
  handleDelete:(id:number) => void
}

const List = (props:ITableProps) => (
  <Table>
    <thead>
      <tr>
        <th>ID</th>
        <th>File name</th>
        <th>File size</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      { props.documents && props.documents.map((doc, i) =>
        <tr key={i}>
          <td>{doc.id}</td>
          <td>{doc.originalFilename} <em>(created: {doc.created_at})</em></td>
          <td>{doc.fileSize} KB</td>
          <td><Button color="danger" onClick={() => props.handleDelete(doc.id)}>delete</Button></td>
        </tr>
      )}
    </tbody>
  </Table>
);

export default List;