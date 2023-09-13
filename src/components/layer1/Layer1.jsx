import { useEffect, useRef, useState } from 'react';
import { Field } from './Layer1.styled';
import { Card } from 'components/card/card';

export const Layer1 = ({ getCards }) => {
  const [cards, setCards] = useState([]);
  const layer1Ref = useRef();

  useEffect(() => {
    setCards(getCards(layer1Ref));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Field ref={layer1Ref}>
        {cards.map(card => {
          return (
            <Card
              number={card.number}
              key={card.id}
              color={card.color}
              pos={card.position}
            />
          );
        })}
      </Field>
    </>
  );
};
