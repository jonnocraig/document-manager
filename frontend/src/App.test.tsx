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

describe('<App>', () => {
  it('should match the snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should call handleGetDocs() in componentDidMount', () => {
    const { props } = setup()
    expect(props.handleGetDocs.mock.calls.length).toBe(1)
  });

  it('should render the document list after fetching data', () => {
    const DOCUMENT = {
      id: 1,
      filename:'123test',
      originalFilename:'test',
      fileSize:1.23,
      fileExtension:'.txt',
      created_at:'01 Jan 2018',
      updated_at:'01 Jan 2018'
    };
    const { wrapper } = setup({ loading: false, data: [DOCUMENT] })
    expect(wrapper.find(List)).toHaveLength(1)
  });

  // it('handleDeleteDoc should call deleteFile', () => {
  //   const { wrapper, props } = setup()
  //   wrapper.instance().handleDeleteFile({ currentTarget: { value: 1 }, preventDefault: jest.fn() })
  //   expect(props.deleteFile.mock.calls.length).toBe(1)
  // })

  // it('handleUploadFile should call uploadFile', () => {
  //   const { wrapper, props } = setup()
  //   wrapper.instance().handleUploadFile({
  //     target: { files: [{ file: Buffer.alloc(1) }], length: 1 },
  //     preventDefault: jest.fn()
  //   })
  //   expect(props.uploadFile.mock.calls.length).toBe(1)
  // })

  // it('handleUploadFile should not call uploadFile if files.length === 0', () => {
  //   const { wrapper, props } = setup()
  //   wrapper.instance().handleUploadFile({
  //     target: { files: [], length: 0 },
  //     preventDefault: jest.fn()
  //   })
  //   expect(props.uploadFile.mock.calls.length).toBe(0)
  // })

  // it('handleFilter should call filterList', () => {
  //   const { wrapper, props } = setup()
  //   wrapper.instance().handleFilter({
  //     target: { value: 'a' },
  //     preventDefault: jest.fn()
  //   })
  //   expect(props.filterList.mock.calls.length).toBe(1)
  // })

});