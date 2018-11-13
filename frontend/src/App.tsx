import * as React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { IDocument } from './types';
import Nav from './components/navbar';
import List from './components/list';
import Search from './components/search';
import UploadButton from './components/uploadButton';
import './App.css';

export interface IAppProps {
  documents:IDocument[] | null,
  filter:string,
  loading:boolean
}

export interface IAppDispatchProps {
  handleGetDocs:() =>void,
  handleFilterDocs:(filter:string) => void,
  handleDeleteDoc:(id:number) => void,
  handleUploadDoc:(data:FormData) =>void
}

export interface IAppState {
  filter:string
}

export class App extends React.PureComponent<IAppProps & IAppDispatchProps, IAppState> {
  
  constructor(props: IAppProps & IAppDispatchProps) {
    super(props);
    this.state = {
      filter: this.props.filter
    };
  }

  componentDidMount() {
    this.props.handleGetDocs();
  }

  onFilterDocs = (evt:any) => {
    this.props.handleFilterDocs(evt.target.value);
  }

  onUploadDocument = (evt:any) => {
    evt.preventDefault()
    const { files } = evt.target

    if (!files.length) { return; };

    const data = new FormData();
    data.append('filename', files[0]);
    this.props.handleUploadDoc(data);
  }

  render() {
    const { loading, filter, documents, handleDeleteDoc } = this.props;

    return (
      <React.Fragment>
        <Nav />
        <Container>
          <Row>
            <Col sm={{ size: 10, offset: 1}}>
              <h2 className="pageTitle">Document manager</h2>
            </Col>
          </Row>
          <Row>
            <Col sm={{ size: 4, offset: 1}}>
              <Search filter={filter} handleFilter={this.onFilterDocs} />
            </Col>
            <Col sm={{ size: 4, offset: 1}}>
              <UploadButton handleUpload={this.onUploadDocument} />
            </Col>
          </Row>          
          <Row>
            <Col sm={{ size: 10, offset: 1}}>
              { loading ? 
                <p id="loading">Loading...</p> :          
                <List filter={filter} documents={documents} handleDelete={handleDeleteDoc} />
              }
            </Col>
          </Row>
        </Container>
      </React.Fragment>      
    );
  }
}

export default App;
