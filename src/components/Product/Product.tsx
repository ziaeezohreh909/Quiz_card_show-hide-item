import axios from "axios";
import { useEffect, useState } from "react";

interface carType {
  id: number;
  name: string;
  price: string;
  img: string;
  info: string;
  isOpen: boolean;
}

export default function Product() {
  const [cars, setCars] = useState<carType[]>([]);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await axios.get("http://localhost:3000/products");
        setCars(data);
      } catch (error) {
        setError(error);
      }
    }
    getData();
  }, []);
  const toggleItem = (index: number) => {
    const updatedCars = [...cars];
    updatedCars[index].isOpen = !updatedCars[index].isOpen;
    setCars(updatedCars);
  };
  return (
    <div>
      {error ? (
        <div className="bg-red-400 flex justify-center p-10 font-bold text-8xl m-10 rounded-lg ">
          Error!!
        </div>
      ) : (
        <div className="m-12 grid grid-cols-3 gap-3">
          {cars.map((car: carType, index: number) => {
            return (
              <div
                className="flex flex-col border p-3 bg-blue-200 rounded-md gap-3"
                key={car.id}
              >
                <img src={car.img} alt="" className="rounded-md h-32" />
                <div className="font-semibold text-xl ">{car.name}</div>
                {car.isOpen && (
                  <div className="h-42 font-serif">{car.info}</div>
                )}
                <div className="font-bold">{car.price}</div>
                <button
                  className="bg-blue-800 text-white rounded-md text-xs p-1"
                  onClick={() => toggleItem(index)}
                >
                  {car.isOpen ? "Hide items" : "Show items"}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
