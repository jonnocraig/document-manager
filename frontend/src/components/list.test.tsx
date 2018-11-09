import * as React from 'react';
import { shallow } from 'enzyme';
import List from './list';
import { Button } from 'reactstrap';

function setup(nextProps = {}) {
  const props = {
    documents:[],
    handleDelete: jest.fn(),
    ...nextProps
  };
  const wrapper = shallow(<List {...props} />);

  return {
    props,
    wrapper
  };
}

const DOCUMENTS_MOCK = [{
  id: 1,
  filename:'123test',
  originalFilename:'test',
  fileSize:1.23,
  created_at:'01 Jan 2018',
  updated_at:'01 Jan 2018'
}, {
  id: 2,
  filename:'345test',
  originalFilename:'test2',
  fileSize:4.56,
  created_at:'02 Jan 2018',
  updated_at:'02 Jan 2018'
}];

describe('<List />', () => {
  it('should match the snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  })

  it('should a table of documents when documents are passed through', () => {
    const { wrapper } = setup({ documents: DOCUMENTS_MOCK })
    expect(wrapper.find(Button)).toHaveLength(2);
  })
})
