export interface CarDto {
  id: string;
  about: string;
  accessories: {
    name: string;
    type: string;
  }[]
  brand: string;
  fuel_type: string;
  name: string;
  photos: string[];
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}