import { useState, useCallback, useMemo } from 'react';
import { format } from 'date-fns';
import { AxiosRequestConfig } from 'axios';
import { formatDuration, formatTime } from '../utils';
import { useFetch } from './useFetch';
import {
  CabinClass,
  Flight,
  Itinerary,
  Location,
  PassengerCount,
  TripType
} from '../types';

interface SearchFlightsResponse {
  data?: {
    itineraries?: Itinerary[];
  };
}

export interface SearchFlightsParams {
  origin: Location;
  destination: Location;
  departureDate: Date;
  returnDate?: Date | null;
  cabinClass: CabinClass;
  passengers: PassengerCount;
  tripType: TripType;
}

export const useSearchFlights = () => {
  const [url, setUrl] = useState<string | null>(null);
  const [config, setConfig] = useState<AxiosRequestConfig | undefined>();
  const {
    data: responseData,
    loading,
    error
  } = useFetch<SearchFlightsResponse>(url, config);

  const searchFlights = useCallback((params: SearchFlightsParams) => {
    if (!params.origin?.code || !params.destination?.code) return;

    const departureDateString = format(params.departureDate, 'yyyy-MM-dd');
    const returnDateString =
      params.tripType === 'round_trip' && params.returnDate
        ? format(params.returnDate, 'yyyy-MM-dd')
        : undefined;

    const newConfig: AxiosRequestConfig = {
      params: {
        originSkyId: params.origin.code,
        destinationSkyId: params.destination.code,
        originEntityId: params.origin.entityId,
        destinationEntityId: params.destination.entityId,
        date: departureDateString,
        returnDate: returnDateString,
        cabinClass: params.cabinClass,
        adults: params.passengers.adults,
        childrens: params.passengers.children,
        limit: 10,
        currency: 'EUR'
      }
    };

    setUrl('/v2/flights/searchFlights');
    setConfig(newConfig);
  }, []);

  const flights = useMemo(() => {
    if (!responseData?.data?.itineraries) return null;

    return responseData.data.itineraries.map((itinerary) => {
      const firstLeg = itinerary.legs[0];
      const lastLeg = itinerary.legs[itinerary.legs.length - 1];
      const segments = firstLeg.segments;
      const totalSegments = segments.length;
      const stops = totalSegments > 1 ? totalSegments - 1 : 0;

      const stopAirports =
        stops > 0
          ? segments.slice(0, -1).map((seg) => seg.destination.displayCode)
          : [];

      const carrier = firstLeg.carriers.marketing[0];

      return {
        id: itinerary.id,
        price: itinerary.price.formatted,
        departure: formatTime(firstLeg.departure),
        arrival: formatTime(lastLeg.arrival),
        origin: firstLeg.origin.displayCode,
        destination: firstLeg.destination.displayCode,
        duration: formatDuration(firstLeg.durationInMinutes),
        stops,
        stopAirports,
        carrierName: carrier?.name,
        carrierLogoUrl: carrier?.logoUrl
      } as Flight;
    });
  }, [responseData]);

  return { flights, loading, error, searchFlights };
};
