import React from 'react';
import { shallow } from 'enzyme';
import HomePageHeader from './HomePageHeader';

describe('<HomePageHeader />', () => {
  test('renders', () => {
    const wrapper = shallow(<HomePageHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
