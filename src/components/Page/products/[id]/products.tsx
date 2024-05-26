import { useEffect, useState } from "react";
import { carType, getProductsApiById } from "../../../api/api";
import { useParams } from "react-router-dom";

export default function Products() {
  const [product, setProduct] = useState<carType>();
  const { id } = useParams();
  useEffect(() => {
    console.log("id=" + id);
    getProductsApiById(id!).then((data) => {
      setProduct(data);
    });
  }, []);
  return (
    <div className="flex justify-center m-8 flex-col items-center">
      <img src={product?.img} alt="" className="rounded-md h-[40vh] w-[40vw]" />
      <h1>Title:{product?.name}</h1>
      <p>Description: {product?.info}</p>
    </div>
  );
}
