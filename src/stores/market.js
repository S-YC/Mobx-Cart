import { observable } from 'mobx';
// **** import counter 연결
import { counter } from './counter';

const market = observable({
  selectedItems: [],
  put(name, price) {
    const exists = this.selectedItems.find((item) => item.name === name);
    if (!exists) {
      this.selectedItems.push({
        name,
        price,
        // **** counter.number를 사용
        count: counter.number,
      });
      return;
    }
    // **** counter.number만큼 증가
    exists.count += counter.number;
  },
  take(name) {
    const itemToTake = this.selectedItems.find((item) => item.name === name);
    itemToTake.count--;
    if (itemToTake.count === 0) {
      // 갯수가 0 이면
      this.selectedItems.remove(itemToTake); // 배열에서 제거처리합니다.
    }
  },
  get total() {
    console.log('총합 계산...');
    return this.selectedItems.reduce((previous, current) => {
      return previous + current.price * current.count;
    }, 0);
  },
});

export { market };