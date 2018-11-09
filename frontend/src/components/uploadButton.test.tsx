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
});
