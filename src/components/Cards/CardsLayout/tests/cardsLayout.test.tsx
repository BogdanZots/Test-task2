import CardsLayout, { ICardsLayoutProps } from '../CardsLayout';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, configure, ShallowWrapper } from 'enzyme';

configure({ adapter: new Adapter() });

const setUp = (props: ICardsLayoutProps) => shallow(<CardsLayout {...props} />);

describe('Cards layout component testing', () => {
  const componentProps = {
    showContent: true,
    errorMessage: '',
    isLoading: false,
  };
  let component: ShallowWrapper;
  beforeEach(() => {
    component = setUp(componentProps);
  });
  it('Should render error when we have error', () => {
    const element = component.find('[data-id="error"]');
    expect(element).toHaveLength(0);
  });
  it('Should render content when everything OK', () => {
    const element = component.find('[data-id="content"]');
    expect(element).toHaveLength(1);
  });
  it('Should render loader when we have loading', () => {
    const element = component.find('[data-id="loading"]');
    expect(element).toHaveLength(0);
  });
});
