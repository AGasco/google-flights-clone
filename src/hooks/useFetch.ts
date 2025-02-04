import { useState, useEffect } from 'react';
import { AxiosRequestConfig } from 'axios';
import { axios } from '../api';

const cache: Record<string, unknown> = {};

export const useFetch = <T>(
  url: string | null,
  config?: AxiosRequestConfig
) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(!!url);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    let cancelled = false;
    setLoading(true);

    const fullUrl = axios.getUri({ url, params: config?.params });
    const cacheKey = fullUrl;

    if (cache[cacheKey]) {
      setData(cache[cacheKey] as T);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get<T>(url, config);
        cache[cacheKey] = response.data;
        if (!cancelled) {
          setData(response.data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Unknown error');
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [url, config]);

  return { data, loading, error };
};
