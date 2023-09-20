import { Layer1 } from 'components/layer1/Layer1';
import { Playfield } from './playground.styled';
import { nanoid } from 'nanoid';
import { Layer2 } from 'components/layer2/Layer2';
import { useEffect, useState } from 'react';
import { Layer3 } from 'components/Layer3/Layer3';
import { Layer4 } from 'components/layer4/layer4';
import Hatsu from '../../assets/tiles/Export/Regular/Hatsu.png';
import Chun from '../../assets/tiles/Export/Regular/Chun.png';
import Sou1 from '../../assets/tiles/Export/Regular/Sou1.png';
import Sou2 from '../../assets/tiles/Export/Regular/Sou2.png';
import Sou3 from '../../assets/tiles/Export/Regular/Sou3.png';
import Sou4 from '../../assets/tiles/Export/Regular/Sou4.png';
import Sou5 from '../../assets/tiles/Export/Regular/Sou5.png';
import Sou6 from '../../assets/tiles/Export/Regular/Sou6.png';
import Sou7 from '../../assets/tiles/Export/Regular/Sou7.png';
import Sou8 from '../../assets/tiles/Export/Regular/Sou8.png';
import Sou9 from '../../assets/tiles/Export/Regular/Sou9.png';
import Sou5Dora from '../../assets/tiles/Export/Regular/Sou5-Dora.png';
import Man1 from '../../assets/tiles/Export/Regular/Man1.png';
import Man2 from '../../assets/tiles/Export/Regular/Man2.png';
import Man3 from '../../assets/tiles/Export/Regular/Man3.png';
import Man4 from '../../assets/tiles/Export/Regular/Man4.png';
import Man5 from '../../assets/tiles/Export/Regular/Man5.png';
import Man6 from '../../assets/tiles/Export/Regular/Man6.png';
import Man7 from '../../assets/tiles/Export/Regular/Man7.png';
import Man8 from '../../assets/tiles/Export/Regular/Man8.png';
import Man9 from '../../assets/tiles/Export/Regular/Man9.png';
import Man5Dora from '../../assets/tiles/Export/Regular/Man5-Dora.png';
import Nun from '../../assets/tiles/Export/Regular/Nan.png';
import Pei from '../../assets/tiles/Export/Regular/Pei.png';
import Pin1 from '../../assets/tiles/Export/Regular/Pin1.png';
import Pin2 from '../../assets/tiles/Export/Regular/Pin2.png';
import Pin3 from '../../assets/tiles/Export/Regular/Pin3.png';
import Pin4 from '../../assets/tiles/Export/Regular/Pin4.png';
import Pin5 from '../../assets/tiles/Export/Regular/Pin5.png';
import Pin6 from '../../assets/tiles/Export/Regular/Pin6.png';
import Pin7 from '../../assets/tiles/Export/Regular/Pin7.png';
import Pin8 from '../../assets/tiles/Export/Regular/Pin8.png';
import Pin9 from '../../assets/tiles/Export/Regular/Pin9.png';
import Pin5Dora from '../../assets/tiles/Export/Regular/Pin5-Dora.png';
import Ton from '../../assets/tiles/Export/Regular/Ton.png';
import Shaa from '../../assets/tiles/Export/Regular/Shaa.png';



export const Playground = () => {
  const [pair, setPair] = useState([]);
  const [allCards, setAllCards] = useState([]);
  const [layer1, setLayer1] = useState(true);
  const [layer2, setLayer2] = useState(true);
  const [layer3, setLayer3] = useState(true);
  const [layer4, setLayer4] = useState(true);
  // const [isPair, setIsPair] = useState(false);
  function getRandomColor() {
    const num = Math.floor(Math.random() * 36);
    switch (num) {
      case 0:
        return Hatsu;
      case 1:
        return Chun;
      case 2:
        return Man1;
      case 3:
        return Man2;
      case 4:
        return Man3;
      case 5:
        return Man4;
      case 6:
        return Man5;
      case 7:
        return Man6;
      case 8:
        return Man7;
      case 9:
        return Man8;
      case 10:
        return Man9;
      case 11:
        return Man5Dora;
      case 12:
        return Nun;
      case 13:
        return Pei;
      case 14:
        return Pin1;
      case 15:
        return Pin2;
      case 16:
        return Pin3;
      case 17:
        return Pin4;
      case 18:
        return Pin5;
      case 19:
        return Pin6;
      case 20:
        return Pin7;
      case 21:
        return Pin8;
      case 22:
        return Pin9;
      case 23:
        return Pin5Dora;
      case 24:
        return Shaa;
      case 25:
        return Sou1;
      case 26:
        return Sou2;
      case 27:
        return Sou3;
      case 28:
        return Sou4;
      case 29:
        return Sou5;
      case 30:
        return Sou6;
      case 31:
        return Sou7;
      case 32:
        return Sou8;
      case 33:
        return Sou9;
      case 34:
        return Sou5Dora;
      case 35:
        return Ton
      default:
        break;
    }
  }
  const colorsArr = [
    Hatsu,
    Chun,
    Man1,
    Man2,
    Man3,
    Man4,
    Man5,
    Man6,
    Man7,
    Man8,
    Man9,
    Man5Dora,
    Nun,
    Pei,
    Pin1,
    Pin2,
    Pin3,
    Pin4,
    Pin5,
    Pin6,
    Pin7,
    Pin8,
    Pin9,
    Pin5Dora,
    Shaa,
    Sou1,
    Sou2,
    Sou3,
    Sou4,
    Sou5,
    Sou6,
    Sou7,
    Sou8,
    Sou9,
    Sou5Dora,
    Ton
  ];
  // const adjustArray = (arr, quantity) => {
  //   let deletedCards = [];
  //   for (let i = 0; i < colorsArr.length; i++) {
  //     let indexes = [];
  //     for (let j = 0; j < arr.length; j++) {
  //       if (arr[j].color === colorsArr[i]) {
  //         indexes.push(j);
  //       }
  //     }
  //     if (indexes.length % 2 !== 0) {
  //       if (deletedCards.length === 0) {
  //         let deleted = arr.splice(indexes[indexes.length - 1], 1);
  //         deletedCards.push(deleted[0]);
  //       } else {
  //         deletedCards[0].color = colorsArr[i];
  //         arr.splice(arr.length - 1, 0, deletedCards[0]);
  //         deletedCards = [];
  //       }
  //     }
  //   }
  //   for (let k = 0; k < arr.length - 1; k++) {
  //     if (arr[k].color === arr[k + 1].color) {
  //       const deleted = arr.splice(k, 1);
  //       arr.splice(Math.floor(Math.random() * quantity), 0, deleted[0]);
  //     }
  //   }
  //   return arr;
  // };
  const getCardsFromLayer = (layer, cardsArr) => {
    if (allCards.length === 0) {
      setAllCards(cards => [...cards, { layer, cardsArr }]);
      return;
    }
    const allCardsFilter = allCards.filter(item => item.layer !== layer);
    console.log(allCardsFilter);
    if (cardsArr[0] === 'empty') {
      setAllCards([...allCardsFilter]);
      return;
    }
    setAllCards([...allCardsFilter, { layer, cardsArr }]);
  };
  const getCards = (ref, layer) => {
    const width = ref.current.getBoundingClientRect().width;
    const height = ref.current.getBoundingClientRect().height;
    let cardAmount = ((width / 50) * height) / 100;
    if(layer ===4){
      cardAmount++
    }
    if(layer ===2){
      cardAmount = 170
    }
    console.log(cardAmount);
    let cardArray = [];
    let row = 0;
    let col = -1;
    for (let i = 0; i <= cardAmount; i++) {
      if (i % Number((width / 50).toFixed(0)) === 0 && i !== 0) {
        row += 1;
        col = -1;
      }
      col += 1;
      let topShift = 50;
      let leftShift = 25;
      const card = {
        number: i,
        color: getRandomColor(),
        id: nanoid(),
        layer,
        position: {
          top: `${row * 100}px`,
          left: `${col * 50}px`,
        },
        positionToCalc: {
          top: `${row * 100 + topShift}px`,
          left: `${col * 50 + leftShift}px`,
        },
      };
      cardArray.push(card);
    }
    // const adjusted = adjustArray(cardArray, cardAmount);
    return cardArray;
  };
  const pickPair = (color, id) => {
    if (pair.length === 0) {
      setPair([{ color, id }]);
    } else if (pair.length === 1) {
      if (pair[0].id === id) {
        clearPair();
        return;
      }
      setPair(pair => [...pair, { color, id }]);
    }
  };
  const clearPair = () => {
    setPair([]);
  };
  const deleteCards = (pair, cards) => {
    const filterCadrs = [];
    for (let j = 0; j < cards.length; j++) {
      if (cards[j].id !== pair[0].id && cards[j].id !== pair[1].id) {
        filterCadrs.push(cards[j]);
      }
      continue;
    }
    clearPair();
    return filterCadrs;
  };
  const renderLayers = layer => {
    switch (layer) {
      case 1:
        setLayer1(false);
        break;
      case 2:
        setLayer2(false);
        break;
      case 3:
        setLayer3(false);
        break;
      case 4:
        setLayer4(false);
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    const all = allCards.flatMap((l) => l.cardsArr);
    let count = {};
    for (let j = 0; j < colorsArr.length; j++) {
      count[colorsArr[j]] = 0;
    }
    for (let i = 0; i < all.length; i++) {
      count[all[i].color] +=1;
    }
    console.log(all, allCards, count);
    // 1. Перебрать count по нечетным картинкам - в каждой взять по одной карточке ее id;
    // 2. Найти эти id в allcards и заменить color на одиникавый рандомный;
    // 3. Сделать setAllCards.
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allCards]);

  return (
    <Playfield>
      {layer1 && (
        <Layer1
          getCards={getCards}
          pickPair={pickPair}
          pair={pair}
          deleteCards={deleteCards}
          clearPair={clearPair}
          getCardsFromLayer={getCardsFromLayer}
          allCards={allCards}
          render={renderLayers}
        />
      )}
      {layer2 && (
        <Layer2
          getCards={getCards}
          pickPair={pickPair}
          pair={pair}
          deleteCards={deleteCards}
          clearPair={clearPair}
          getCardsFromLayer={getCardsFromLayer}
          allCards={allCards}
          render={renderLayers}
        />
      )}
      {layer3 && (
        <Layer3
          getCards={getCards}
          pickPair={pickPair}
          pair={pair}
          deleteCards={deleteCards}
          clearPair={clearPair}
          getCardsFromLayer={getCardsFromLayer}
          allCards={allCards}
          render={renderLayers}
        />
      )}
      {layer4 && (
        <Layer4
          getCards={getCards}
          pickPair={pickPair}
          pair={pair}
          deleteCards={deleteCards}
          clearPair={clearPair}
          getCardsFromLayer={getCardsFromLayer}
          allCards={allCards}
          render={renderLayers}
        />
      )}
    </Playfield>
  );
};
