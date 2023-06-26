import { withSelector } from './middleware';
import { devtools } from 'zustand/middleware';
import { create } from 'zustand';

interface TCountState {
  count: number;
}
interface TCountAction {
  increaseCount: () => void;
  decreaseCount: () => void;
}

const countStore = () => ({
  count: 0,
});

export const useCountStore = create(devtools<TCountState>(countStore, { name: 'countStore' }));

export const useCountAction = (): TCountAction => ({
  increaseCount: () => {
    useCountStore.setState((state) => ({ count: state.count + 1 }));
  },
  decreaseCount: () => {
    useCountStore.setState((state) => ({ count: state.count - 1 }));
  },
});

export const useCountSelector = withSelector(useCountStore);
