import React from 'react';
import { shallow } from 'enzyme';
import SinglePortfolio from './SinglePortfolio';

describe('<SinglePortfolio />', () => {
  test('renders', () => {
    const wrapper = shallow(<SinglePortfolio />);
    expect(wrapper).toMatchSnapshot();
  });
});
