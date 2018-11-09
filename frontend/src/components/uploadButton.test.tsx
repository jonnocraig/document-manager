import * as React from 'react';
import { shallow } from 'enzyme';
import UploadButton from './uploadButton';

function setup(nextProps = {}) {
  const props = {
    handleUpload: jest.fn(),
    ...nextProps
  };
  const wrapper = shallow(<UploadButton {...props} />);

  return {
    props,
    wrapper
  };
}

describe('<UploadButton />', () => {
  it('should match the snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should fire handeUpload if changed', () => {
    const { props, wrapper } = setup();
    const event = { preventDefault: jest.fn(), target: {files: [ 'test.txt' ]}};
    wrapper.find('#uploadDocument').simulate('change', event);
    expect(props.handleUpload.mock.calls.length).toBe(1);    
  });
});
