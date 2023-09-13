import { useEffect, useRef, useState } from 'react';
import { MojangCard } from './card.styled';

export const Card = ({ color, id, pickPair, isPair, pos}) => {
  const [clicked, setClicked] = useState(false);
  const [curPair, setCurPair] = useState(null);
  const cardRef = useRef(null);


  const choosedCard = () => {
    setClicked(!clicked);
    setCurPair(true);
    pickPair(color, id);
  };
  useEffect(() => {
    if (!isPair) {
      return;
    }

    setCurPair(false);
    setTimeout(() => {
      setClicked(false);
      setCurPair(null);
    }, 700);
  }, [isPair]);
  return (
    <MojangCard
      className={clicked && 'choosed'}
      ref={cardRef}
      $color={color}
      onClick={choosedCard}
      $choosed={clicked}
      $wrongpair={curPair}
      $pos={pos}
    ></MojangCard>
  );
};
