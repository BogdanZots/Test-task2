import s, { keyframes } from 'styled-components';

const RingAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const StyledLoader = s.div`
  display: inline-block;
  width: 64px;
  height: 64px;
  &:after {
    content: ' ';
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #cef;
    border-color: #cef transparent #cef transparent;
    animation: ${RingAnimation} 1.2s linear infinite;
  }
`;
