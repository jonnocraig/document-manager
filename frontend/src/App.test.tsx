import * as React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('<App>', () => {
  let wrapper:any;
  
  beforeEach(() => {
    wrapper = shallow(<App />);//.dive();
  });

  test('should render without crashing', () => {
    expect(wrapper).toBeTruthy();
  });

});