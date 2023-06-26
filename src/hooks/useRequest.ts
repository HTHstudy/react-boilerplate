import { useState, useCallback } from 'react';
import { type AxiosPromise } from 'axios';

type PromiseCreator<R> = (...params: unknown[]) => AxiosPromise<R>;

// eslint-disable-next-line @typescript-eslint/ban-types
type UseRequestReturnType<R> = [Function, boolean, R | null, Error | null, () => void];

export default function useRequest<R = unknown>(promiseCreator: PromiseCreator<R>): UseRequestReturnType<R> {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<R | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const onRequest = useCallback(
    async (...params: unknown[]) => {
      try {
        setLoading(true);
        const response = await promiseCreator(...params);
        setData(response.data);
      } catch (e) {
        setError(e as any);
        throw e;
      }
      setLoading(false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onReset = () => {
    setLoading(false);
    setData(null);
    setError(null);
  };

  return [onRequest, loading, data, error, onReset];
}
