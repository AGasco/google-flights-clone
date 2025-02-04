export interface Location {
  id: string;
  name: string;
  code: string;
  entityId: string;
  displayCode: string;
  country: string;
}

export interface PassengerCount {
  adults: number;
  children: number;
}

export type CabinClass = 'economy' | 'premium_economy' | 'business' | 'first';
export type TripType = 'one_way' | 'round_trip';
