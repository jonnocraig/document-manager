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

  it('should fire handleFilter if input value changed', () => {
    const { props, wrapper } = setup();
    const event = { preventDefault: jest.fn(), target: { value: 'abc' }};
    wrapper.find('#filterDocuments').simulate('change', event);
    expect(props.handleFilter.mock.calls.length).toBe(1);    
  });
});
