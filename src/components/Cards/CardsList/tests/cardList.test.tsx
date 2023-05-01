import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardsList from '../CardsList';

configure({ adapter: new Adapter() });

describe('CardsList component', () => {
  it('should render with no cards', () => {
    const wrapper = shallow(<CardsList cards={[]} />);
    expect(wrapper.find('[data-id="list"]')).toHaveLength(1);
  });

  it('should render with one card', () => {
    const wrapper = shallow(<CardsList cards={[{ id: '1', path: 'dog1.jpg' }]} />);
    expect(wrapper.find('[data-id="list"]')).toHaveLength(1);
    expect(wrapper.find('[data-testid="card-1"]')).toHaveLength(1);
  });

  it('should render with multiple cards', () => {
    const wrapper = shallow(
      <CardsList
        cards={[
          { id: '1', path: 'dog1.jpg' },
          { id: '2', path: 'dog1.jpg' },
          { id: '3', path: 'dog1.jpg' },
        ]}
      />,
    );
    console.log(wrapper.debug());
    expect(wrapper.find('[data-id="list"]')).toHaveLength(1);
    expect(wrapper.find('[data-testid="card-1"]')).toHaveLength(1);
    expect(wrapper.find('[data-testid="card-2"]')).toHaveLength(1);
    expect(wrapper.find('[data-testid="card-3"]')).toHaveLength(1);
  });

  it('should render root element with data-id attribute equal to "list"', () => {
    const wrapper = shallow(
      <CardsList
        cards={[
          { id: '1', path: 'dog1.jpg' },
          { id: '2', path: 'dog1.jpg' },
          { id: '3', path: 'dog1.jpg' },
        ]}
      />,
    );
    expect(wrapper.find('[data-id="list"]')).toHaveLength(1);
  });
});
