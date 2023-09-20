import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const popUp = keyframes`
    0% {
      opacity: 0;
      transform: scale(0.1);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
`;
const popOut = keyframes`
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(0.1);
    }
`;

export const Wrap = styled.div`
  animation: ${popUp} 1000ms cubic-bezier(0.29, 0.43, 0.8, 1.14) 1 normal
    forwards;
  position: absolute;
  top: calc(50% - 362px);
  left: calc(50% - 300px);
  width: 600px;
  height: 725px;
  border: 5px solid black;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  backdrop-filter: blur(15px);
  &.close {
    animation: ${popOut} 1000ms cubic-bezier(0.29, 0.43, 0.8, 1.14) 1 normal
      forwards;
  }
`;

export const MainBtn = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 40px;
  line-height: 1.15;
  letter-spacing: 5px;
  padding: 20px 40px;
  border-radius: 12px;
  border: 5px solid;
  border-color: black;
  transition: transform ${p => p.theme.tr}, border-color ${p => p.theme.tr},
    color ${p => p.theme.tr};
  &:hover {
    transform: scale(1.1);
    border-color: red;
    color: red;
  }
`;
