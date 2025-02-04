import { createContext, useContext } from 'react';
import {
  CabinClass,
  Flight,
  Location,
  PassengerCount,
  TripType
} from '../types';

interface FlightContextType {
  tripType: TripType;
  setTripType: (type: TripType) => void;
  passengers: PassengerCount;
  setPassengers: (count: PassengerCount) => void;
  cabinClass: CabinClass;
  setCabinClass: (cabin: CabinClass) => void;
  origin: Location | null;
  setOrigin: (location: Location | null) => void;
  destination: Location | null;
  setDestination: (location: Location | null) => void;
  departureDate: Date | null;
  setDepartureDate: (date: Date | null) => void;
  returnDate: Date | null;
  setReturnDate: (date: Date | null) => void;
  flights: Flight[];
  setFlights: (flights: Flight[]) => void;
}

export const FlightContext = createContext<FlightContextType | undefined>(
  undefined
);

export const useFlightContext = () => {
  const context = useContext(FlightContext);
  if (!context) {
    throw new Error('useFlightContext must be used within a FlightProvider');
  }
  return context;
};
