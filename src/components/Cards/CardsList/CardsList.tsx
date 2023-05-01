import { ICard } from '../../../types/types';
import Card from '../Card/Card';
import { StyledCardsContainer } from './CardsList.styled';

export interface ICardListProps {
  cards: Array<ICard>;
}

export default function CardsList({ cards }: ICardListProps) {
  if (!cards.length) return <div>No data</div>;
  return (
    <StyledCardsContainer data-id="list">
      {cards.map((item, index) => (
        <Card data-testid={`card-${item.id}`} key={item.id} path={item.path} />
      ))}
    </StyledCardsContainer>
  );
}
