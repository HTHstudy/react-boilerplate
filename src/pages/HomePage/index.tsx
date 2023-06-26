import { useCountSelector, useCountAction } from '@store/useCountStore';

export default function HomePage() {
  const { increaseCount, decreaseCount } = useCountAction();
  const { count } = useCountSelector(['count']);
  return (
    <div>
      <h1>HomePage</h1>
      <p>count:{count}</p>
      <div>
        <button onClick={increaseCount}>increaseCount</button>
        <button onClick={decreaseCount}>decreaseCount</button>
      </div>
    </div>
  );
}
