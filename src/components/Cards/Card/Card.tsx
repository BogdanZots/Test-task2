import { StyledCardImg } from './Card.styled';

interface ICardProps {
  index: string;
}

export default function Card({ index }: ICardProps) {
  return <StyledCardImg src={require(`../../../assets/images/dog${index}.jpg`)} />;
}
