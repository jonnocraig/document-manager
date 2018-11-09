import * as React from 'react';
import { shallow } from 'enzyme';
import Nav from './navbar';

function setup(nextProps = {}) {
  const props = {
    ...nextProps
  };
  const wrapper = shallow(<Nav {...props} />);

  return {
    props,
    wrapper
  };
}

describe('<Nav />', () => {
  it('should match the snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
