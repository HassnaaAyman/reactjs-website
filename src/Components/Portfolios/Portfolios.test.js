import React from 'react';
import { shallow } from 'enzyme';
import Portfolios from './Portfolios';

describe('<Portfolios />', () => {
  test('renders', () => {
    const wrapper = shallow(<Portfolios />);
    expect(wrapper).toMatchSnapshot();
  });
});
