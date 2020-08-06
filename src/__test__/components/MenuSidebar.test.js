import React from 'react';
import { mount } from 'enzyme';
import MenuSidebar from '../../components/MenuSidebar';

describe('<MenuSidebar />', () => {
  test('Render del componente MenuSidebar', () => {
    const menuSidebar = mount(<MenuSidebar />);
    expect(menuSidebar.length).toEqual(1);
  });
});
