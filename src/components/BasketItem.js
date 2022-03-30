import React from 'react';
import './BasketItem.css';
import { useObserver } from 'mobx-react';

// **** 세부참조가 아닌 item자체를 들고옴
const BasketItem = ({ item, onTake }) => {
  return useObserver(() => (
    <div className="BasketItem">
      <div className="name">{item.name}</div>
      <div className="price">{item.price}원</div>
      <div className="count">{item.count}</div>
      <div className="return" onClick={() => onTake(item.name)}>
        갖다놓기
      </div>
    </div>
  ));
};

export default BasketItem;