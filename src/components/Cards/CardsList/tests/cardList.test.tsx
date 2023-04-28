import CardsList, { ICardListProps } from '../CardsList';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure, ShallowWrapper } from 'enzyme';

configure({ adapter: new Adapter() });

const setUp = (props: ICardListProps) => shallow(<CardsList {...props} />);

describe('Cards layout component testing', () => {
  const componentProps = { cards: [1, 2, 3] };
  let component: ShallowWrapper;
  beforeEach(() => {
    component = setUp(componentProps);
  });
  it('Should render list correctly', () => {
    const element = component.find('[data-id="list"]');
    expect(element.children()).toHaveLength(componentProps.cards.length);
  });
});
