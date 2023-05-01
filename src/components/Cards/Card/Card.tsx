import { StyledCardImg } from './Card.styled';

interface ICardProps {
  path: string;
}

export default function Card({ path }: ICardProps) {
  return <StyledCardImg src={require('../../../assets/images/' + path)} />;
}
