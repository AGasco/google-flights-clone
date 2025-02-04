import { ReactNode, useEffect, useState } from 'react';
import {
  CabinClass,
  Flight,
  Location,
  PassengerCount,
  TripType
} from '../types';
import { FlightContext } from './FlightContext';

const FlightProvider = ({ children }: { children: ReactNode }) => {
  const [tripType, setTripType] = useState<TripType>('round_trip');
  const [passengers, setPassengers] = useState<PassengerCount>({
    adults: 1,
    children: 0
  });
  const [cabinClass, setCabinClass] = useState<CabinClass>('economy');
  const [origin, setOrigin] = useState<Location | null>(null);
  const [destination, setDestination] = useState<Location | null>(null);
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [flights, setFlights] = useState<Flight[]>([]);

  useEffect(() => {
    if (!departureDate) {
      setDepartureDate(new Date());
    }
    if (!returnDate) {
      setReturnDate(new Date(Date.now() + 3 * 86400000));
    }
  }, []);

  return (
    <FlightContext.Provider
      value={{
        tripType,
        setTripType,
        passengers,
        setPassengers,
        cabinClass,
        setCabinClass,
        origin,
        setOrigin,
        destination,
        setDestination,
        departureDate,
        setDepartureDate,
        returnDate,
        setReturnDate,
        flights,
        setFlights
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};

export default FlightProvider;
