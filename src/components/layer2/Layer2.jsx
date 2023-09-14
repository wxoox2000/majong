import { useEffect, useRef, useState } from 'react';
import { Field } from './Layer2.styled';
import { Card } from 'components/card/card';

export const Layer2 = ({ getCards, pickPair, deleteCards, pair, clearPair, getCardsFromLayer, allCards }) => {
  const [cards, setCards] = useState([]);
  const [isPair, setIsPair] = useState(false);
  const layer2Ref = useRef();

  useEffect(() => {
    setCards(getCards(layer2Ref, 2));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if(cards.length ===0) {
      return;
    }
    getCardsFromLayer(2, cards);
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards])
  useEffect(() => {
    if (pair.length !== 2) {
      setIsPair(false);
      return;
    }
    else if(pair[0].color !== pair[1].color){
      setCards(cards => [...cards]);
      setIsPair(true);
      clearPair()

      return;
    }
    setCards(deleteCards(pair, cards));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pair]);
  return (
    <>
      <Field ref={layer2Ref}>
        {cards.map(card => {
          if (card.number !== 171) {
            return (
              <Card
                id={card.id}
                key={card.id}
                color={card.color}
                pickPair={pickPair}
                isPair={isPair}
                pos={card.position}
                layer={card.layer}
                allCards={allCards}
              />
            );
          }
          return null;
        })}
      </Field>
    </>
  );
};
