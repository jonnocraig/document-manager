import * as React from 'react';
import { shallow } from 'enzyme';
import Search from './search';

function setup(nextProps = {}) {
  const props = {
    filter:'',
    handleFilter: jest.fn(),
    ...nextProps
  };
  const wrapper = shallow(<Search {...props} />);

  return {
    props,
    wrapper
  };
}

describe('<Search />', () => {
  it('should match the snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
