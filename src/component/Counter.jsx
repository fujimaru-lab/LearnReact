import React, {
  useState
} from 'react';
import CounterButton from './CounterButton';
import css from '../css/Counter.module.css';

const Counter = () => {
  // 各カウンターに渡す掛け算の基準の数, 状態, State Hook
  const base1 = 2;
  const [base1Count, setBase1Count] = useState(0);
  const base2 = 3;
  const [base2Count, setBase2Count] = useState(0);
  const base3 = 5;
  const [base3Count, setBase3Count] = useState(0);
  const base4 = 7;
  const [base4Count, setBase4Count] = useState(0);
  const base5 = 9;
  const [base5Count, setBase5Count] = useState(0);

  const total = base1 * base1Count +
                base2 * base2Count +
                base3 * base3Count +
                base4 * base4Count +
                base5 * base5Count;

  return (
    <div className={css.counter_wrapper}>
      <div className={css.total}>Total:{total}</div>
      <CounterButton base={base1} count={base1Count} setCount={setBase1Count} />
      <CounterButton base={base2} count={base2Count} setCount={setBase2Count} />
      <CounterButton base={base3} count={base3Count} setCount={setBase3Count} />
      <CounterButton base={base4} count={base4Count} setCount={setBase4Count} />
      <CounterButton base={base5} count={base5Count} setCount={setBase5Count} />
    </div>
  )
}

export default Counter;
