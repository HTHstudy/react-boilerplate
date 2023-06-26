import { shallow } from 'zustand/shallow';
import { type UseBoundStore, type StoreApi, useStore } from 'zustand';
import { useCallback } from 'react';

export const withSelector = <StateType extends object>(store: UseBoundStore<StoreApi<StateType>>) => {
  return function <K extends keyof StateType>(keys: K[]) {
    const selectors = useCallback((state: StateType) => {
      const obj = {} as any;
      keys.forEach((key) => {
        obj[key] = state[key];
      });
      return obj as Pick<StateType, K>;
    }, []);

    return useStore(store, selectors, shallow);
  };
};
