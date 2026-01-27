
export interface ShipmentStatus {
  status: string;
  location: string;
  timestamp: string;
  description: string;
  completed: boolean;
}

export interface Shipment {
  id: string;
  trackingId: string;
  sender: string;
  receiver: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
  status: 'In Transit' | 'Delivered' | 'Pending' | 'Out for Delivery' | 'Exception';
  timeline: ShipmentStatus[];
}

export interface QuoteRequest {
  originPincode: string;
  destinationPincode: string;
  weight: number;
  length: number;
  width: number;
  height: number;
}

export interface QuoteResult {
  service: string;
  price: number;
  estimatedDays: string;
}
