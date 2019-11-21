import React from 'react';
import { shallow } from 'enzyme';
import FormField from './FormField';

describe('<FormField />', () => {
  test('renders', () => {
    const wrapper = shallow(<FormField />);
    expect(wrapper).toMatchSnapshot();
  });
});
