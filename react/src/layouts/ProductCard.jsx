import moneyFormatter from "../utils/moneyFormatter";
import { Link } from "react-router-dom";

export default function ProductCard({product}) {

  const { id, itemName, itemPrice, imageUrl } = product;

  return (
    <article className="w-60 text-center bg-cyan-500 py-4 px-14 rounded-md">
      <Link to={`/product/${id}`}>
        <img src={imageUrl} className="h-52" />
        <h2 className="text-3xl">{itemName}</h2>
        <p className="text-xl mt-6">{moneyFormatter(itemPrice)}</p>

      </Link>
    </article>
  )
}