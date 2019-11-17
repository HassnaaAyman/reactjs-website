import React from 'react';
import { shallow } from 'enzyme';
import Clients from './Clients';

describe('<Clients />', () => {
  test('renders', () => {
    const wrapper = shallow(<Clients />);
    expect(wrapper).toMatchSnapshot();
  });
});
