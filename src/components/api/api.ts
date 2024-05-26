import axios from "axios";

export interface carType {
  id: number;
  name: string;
  price: string;
  img: string;
  info: string;
  isOpen: boolean;
}

export async function getProductsApiById(id: string) {
  const res = await axios.get<carType>(`http://localhost:3000/products/${id}`);
  return res.data;
}
