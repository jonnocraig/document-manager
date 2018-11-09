import * as React from 'react';
import { IDocument } from './types';
import Nav from './components/navbar';
import List from './components/list';
import Search from './components/search';
import UploadButton from './components/uploadButton';

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

    if (!files.length) return;

    const data = new FormData();
    data.append('upload', files[0]);
    this.props.handleUploadDoc(data);
  }

  render() {
    const { loading, filter, documents, handleDeleteDoc } = this.props;

    return (
      <React.Fragment>
        <Nav />
        <h1>Document manager</h1>
        <Search filter={filter} handleFilter={this.onFilterDocs} />
        <UploadButton handleUpload={this.onUploadDocument} />
        { loading ? 
          <p>Loading...</p> :          
          <List documents={documents} handleDelete={handleDeleteDoc}></List>
        }
      </React.Fragment>
    );
  }
}

export default App;
