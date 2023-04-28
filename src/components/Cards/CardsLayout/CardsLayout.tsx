import CardsList from '../CardsList/CardsList';
import Loader from '../../Loader/Loader';
import { defaultCardsData } from '../../../consts/consts';
import { StyledLayoutContainer } from './CardsLayout.styled';

export interface ICardsLayoutProps {
  showContent: boolean;
  errorMessage: string;
  isLoading: boolean;
}

export default function CardsLayout({
  showContent = false,
  errorMessage,
  isLoading,
}: ICardsLayoutProps) {
  const renderContent = () => {
    if (showContent) {
      return <CardsList data-id="content" cards={defaultCardsData} />;
    } else if (isLoading) {
      return <Loader />;
    } else if (errorMessage) {
      return <div data-id="error">{errorMessage}</div>;
    }
    return undefined;
  };
  return <StyledLayoutContainer>{renderContent()}</StyledLayoutContainer>;
}
