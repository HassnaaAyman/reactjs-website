import React from 'react';
import { shallow } from 'enzyme';
import TeamCards from './TeamCards';

describe('<TeamCards />', () => {
  test('renders', () => {
    const wrapper = shallow(<TeamCards />);
    expect(wrapper).toMatchSnapshot();
  });
});
