import { StyledCardImg } from './Card.styled';

interface ICardProps {
  path: string;
}

const BASE_IMG_URL = '../../../assets/images/';

export default function Card({ path }: ICardProps) {
  return <StyledCardImg src={require('../../../assets/images/' + path)} />;
}
