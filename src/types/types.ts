interface Segment {
  destination: {
    displayCode: string;
  };
}

interface Carrier {
  name?: string;
  logoUrl?: string;
}

interface Leg {
  origin: Location;
  destination: Location;
  departure: string;
  arrival: string;
  durationInMinutes: number;
  segments: Segment[];
  carriers: {
    marketing: Carrier[];
  };
}

export interface Itinerary {
  id: string;
  price: {
    formatted: string;
  };
  legs: Leg[];
}

export interface Flight {
  id: string;
  price: string;
  departure: string;
  arrival: string;
  origin: string;
  destination: string;
  duration: string;
  stops: number;
  stopAirports: string[];
  carrierName: string;
  carrierLogoUrl: string;
}

export interface Location {
  id: string;
  name: string;
  code: string;
  entityId: string;
  displayCode?: string;
  country: string;
}

export interface PassengerCount {
  adults: number;
  children: number;
}

export type CabinClass = 'economy' | 'premium_economy' | 'business' | 'first';
export type TripType = 'one_way' | 'round_trip';
