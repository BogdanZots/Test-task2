import Card from '../Card/Card';
import { StyledCardsContainer } from './CardsList.styled';

export interface ICardListProps {
  cards: Array<number>;
}

export default function CardsList({ cards }: ICardListProps) {
  return (
    <StyledCardsContainer data-id="list">
      {cards.map((item, index) => {
        return <Card key={String(item)} index={String(index + 1)} />;
      })}
    </StyledCardsContainer>
  );
}
