import { useMemo } from 'react';
import { useFetch } from './useFetch';
import { Location } from '../types';

interface SearchAirportResponse {
  data: Array<{
    presentation: {
      title: string;
      subtitle: string;
    };
    navigation: {
      relevantFlightParams: {
        skyId: string;
        entityId: string;
      };
    };
  }>;
}

const useSearchAirports = (searchTerm: string) => {
  const url = useMemo(() => {
    return searchTerm
      ? `/v1/flights/searchAirport?query=${encodeURIComponent(
          searchTerm
        )}&locale=en-US`
      : null;
  }, [searchTerm]);

  const { data, loading, error } = useFetch<SearchAirportResponse>(url);

  const locations = useMemo<Location[]>(() => {
    if (!data?.data) return [];
    return data.data.map((item) => ({
      id: item.navigation.relevantFlightParams.entityId,
      name: item.presentation.title,
      code: item.navigation.relevantFlightParams.skyId,
      entityId: item.navigation.relevantFlightParams.entityId,
      country: item.presentation.subtitle
    }));
  }, [data]);

  return { locations, loading, error };
};

export default useSearchAirports;
