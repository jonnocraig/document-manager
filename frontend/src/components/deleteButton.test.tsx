import * as React from 'react';
import { shallow } from 'enzyme';
import { Modal } from 'reactstrap';
import DeleteButton from './deleteButton';

function setup(nextProps = {}) {
  const props = {
    id:0,
    itemId: 1,
    title:'Test',
    handleDelete: jest.fn(),
    ...nextProps
  };
  const wrapper = shallow(<DeleteButton {...props} />);

  return {
    props,
    wrapper
  };
}

describe('<DeleteButton />', () => {
  
  it('should match the snapshot', () => {
    const { wrapper } = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should show modal if delete clicked', () => {
    const { wrapper } = setup();
    const event = { preventDefault: jest.fn(), target: { value: 'abc' }};
    wrapper.find('#deleteButton0').simulate('click', event);
    expect(wrapper.find(Modal).length).toBe(1);    
  });

  it('should fire handleDelete with the correct itemId if modal clicked', () => {
    const { props, wrapper } = setup();
    const event = { preventDefault: jest.fn(), target: { value: 'abc' }};
    const wrapperInstance = wrapper.instance() as DeleteButton;
    wrapperInstance.handleConfirmDelete(event);
    wrapper.update();
    expect(props.handleDelete.mock.calls.length).toBe(1);
  });
});
