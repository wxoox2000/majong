import { Layer1 } from 'components/layer1/Layer1';
import { Playfield } from './playground.styled';
import { nanoid } from 'nanoid';
import { Layer2 } from 'components/layer2/Layer2';
import { useState } from 'react';

export const Playground = () => {
  const [pair, setPair] = useState([]);
  // const [isPair, setIsPair] = useState(false);
  function getRandomColor() {
    const num = Math.floor(Math.random() * 12);
    switch (num) {
      case 0:
        return 'red';
      case 1:
        return 'blue';
      case 2:
        return 'yellow';
      case 3:
        return 'purple';
      case 4:
        return 'brown';
      case 5:
        return 'white';
      case 6:
        return 'gold';
      case 7:
        return 'coral';
      case 8:
        return 'aliceblue';
      case 9:
        return 'peachpuff';
      case 10:
        return 'cyan';
      case 11:
        return 'grey';
      default:
        break;
    }
  }
  const colorsArr = [
    'red',
    'blue',
    'yellow',
    'purple',
    'brown',
    'white',
    'gold',
    'coral',
    'aliceblue',
    'peachpuff',
    'cyan',
    'grey',
  ];
  const adjustArray = (arr, quantity) => {
    let deletedCards = [];
    for (let i = 0; i < colorsArr.length; i++) {
      let indexes = [];
      for (let j = 0; j < arr.length; j++) {
        if (arr[j].color === colorsArr[i]) {
          indexes.push(j);
        }
      }
      if (indexes.length % 2 !== 0) {
        if (deletedCards.length === 0) {
          let deleted = arr.splice(indexes[indexes.length - 1], 1);
          deletedCards.push(deleted[0]);
        } else {
          deletedCards[0].color = colorsArr[i];
          arr.splice(arr.length - 1, 0, deletedCards[0]);
          deletedCards = [];
        }
      }
    }
    for (let k = 0; k < arr.length - 1; k++) {
      if (arr[k].color === arr[k + 1].color) {
        const deleted = arr.splice(k, 1);
        arr.splice(Math.floor(Math.random() * quantity), 0, deleted[0]);
      }
    }
    return arr;
  };
  const getCards = ref => {
    const width = ref.current.getBoundingClientRect().width;
    const height = ref.current.getBoundingClientRect().height;
    const cardAmount = ((width / 50) * height) / 100;
    let cardArray = [];
    let row = 0;
    let col = -1;
    for (let i = 0; i < cardAmount; i++) {
      if(i % Number((width / 50).toFixed(0)) ===0 && i !==0){
        row +=1;
        col = -1;
      }
      col +=1;
      const card = {
        number: i,
        color: getRandomColor(),
        id: nanoid(),
        position: {
          top: `${row *100}px`, 
          left: `${col *50}px`,
        }
      };
      cardArray.push(card);
    }
    const adjusted = adjustArray(cardArray, cardAmount);
    return adjusted;
  };
  const pickPair = (color, id) => {
    if (pair.length ===0) {
      setPair([{ color, id }]);
    }
    else if(pair.length ===1) {
      if(pair[0].id === id){
        clearPair();
        return;
      }
      setPair(pair => [...pair, { color, id }]);
    }
  };
  const clearPair = () => {
    setPair([]);
  }
  const deleteCards = (pair, cards) => {
    const filterCadrs = [];
    for (let j = 0; j < cards.length; j++) {
      if (cards[j].id !== pair[0].id && cards[j].id !== pair[1].id) {
        filterCadrs.push(cards[j]);
      }
      continue
    }
    clearPair()
    console.log(filterCadrs);
    return filterCadrs;
  };

  return (
    <Playfield>
      <Layer1
        getCards={getCards}
        pickPair={pickPair}
        pair={pair}
        deleteCards={deleteCards}
        clearPair={clearPair}
      />
      <Layer2
        getCards={getCards}
        pickPair={pickPair}
        pair={pair}
        deleteCards={deleteCards}
        clearPair={clearPair}
      />
    </Playfield>
  );
};
