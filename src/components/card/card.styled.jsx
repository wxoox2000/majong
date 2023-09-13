import styled from 'styled-components';
function choosed(p) {
  switch (p.$choosed) {
    case false:
      return `border-left: 5px solid black;
            border-bottom: 5px solid black;
            border-right: 2px solid black;
            border-top: 2px solid black;`;
    case true:
      return 'border: 5px solid green;';
    default:
      break;
  }
}
function error(p) {
  if (!p.$wrongpair && p.className === 'choosed') {
    return 'border: 5px solid red;';
  }
}

export const MojangCard = styled.div.attrs(p =>({
  style: {
    top: p.$pos.top,
    left: p.$pos.left,
  }
}))`
position: absolute;
  width: 50px;
  height: 100px;
  border-radius: 10px;

  ${choosed}
  ${error}
  background-color: ${p => p.$color};
  transform: scale(1);
  transition: transform cubic-bezier(0.29, 0.43, 0.8, 1.14) 300ms,
    border cubic-bezier(0.29, 0.43, 0.8, 1.14) 150ms;
  &:hover {
    transform: scale(1.1);
    z-index: 10;
  }
`;
