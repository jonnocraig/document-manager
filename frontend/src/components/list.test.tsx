import * as React from 'react';
import { shallow } from 'enzyme';
import List from './list';
import { Button } from 'reactstrap';

function setup(nextProps = {}) {
  const props = {
    documents:[],
    filter: '',
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
  fileExtension:'txt',
  created_at:'01 Jan 2018',
  updated_at:'01 Jan 2018'
}, {
  id: 2,
  filename:'345test',
  originalFilename:'test2',
  fileSize:4.56,
  fileExtension:'txt',
  created_at:'02 Jan 2018',
  updated_at:'02 Jan 2018'
}];

describe('<List />', () => {
  it('should match the snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  })

  it('should a table of documents when documents are passed through', () => {
    const { wrapper } = setup({ documents: DOCUMENTS_MOCK });
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  it('should render a friendly message when no documents are passed through', () => {
    const { wrapper } = setup({ documents: null });
    expect(wrapper.find('p').text()).toBe('Such empty? Upload a new document by clicking the Upload button above');
  });

  it('should render a friendly message when no documents are found when searching', () => {
    const { wrapper } = setup({ documents: [], filter:'aa' });
    expect(wrapper.find('p').text()).toBe('No results found!');
  });

  it('handleDeleteDoc should get called if delete button pushed', () => {
    const { wrapper, props } = setup({ documents: DOCUMENTS_MOCK });
    const event = { preventDefault: jest.fn(), target: { value: 1}};
    wrapper.find('#deleteButton0').simulate('click', event);
    expect(props.handleDelete.mock.calls.length).toBe(1);    
  })
})
