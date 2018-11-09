import * as React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import List from './components/list';

function setup(nextProps = {}) {
  const props = {
    documents:null,
    filter:'',
    loading:false,
    handleGetDocs: jest.fn(),
    handleFilterDocs:jest.fn(),
    handleDeleteDoc:jest.fn(),
    handleUploadDoc:jest.fn(),
    ...nextProps
  };
  const wrapper = shallow(<App {...props} />);

  return {
    props,
    wrapper
  };
}

const DOCUMENT = {
  id: 1,
  filename:'123test',
  originalFilename:'test',
  fileSize:1.23,
  fileExtension:'.txt',
  created_at:'01 Jan 2018',
  updated_at:'01 Jan 2018'
};

describe('<App>', () => {
  it('should match the snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleGetDocs() in componentDidMount', () => {
    const { props } = setup()
    expect(props.handleGetDocs.mock.calls.length).toBe(1);
  });

  it('should render the document list after fetching data', () => {
    const { wrapper } = setup({ loading: false, data: [DOCUMENT] })
    expect(wrapper.find(List)).toHaveLength(1)
  });
});