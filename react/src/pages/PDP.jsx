import { useLoaderData } from "react-router-dom"
import moneyFormatter from "../utils/moneyFormatter"
import { useGlobalContext } from "../context/GlobalContext";
import { actionAddToCart, actionToggleCart } from "../context/GlobalActions";


export default function PDP() {
  const product = useLoaderData();
  const { itemName, itemPrice, imageUrl, itemDescription } = product;

  const [, globalDispatch] = useGlobalContext();

  const handleAddToCart = () => {
    globalDispatch(actionAddToCart(product))
    globalDispatch(actionToggleCart());
  }

  return (
    <main>
      <section className="bg-cyan-500">
        <div className="flex gap-6">
          <img src={imageUrl} className="h-96" />
          <article className="px-8 w-full">
            <h1 className=" mt-10 text-4xl">{itemName}</h1>
            <p className="mt-5">{moneyFormatter(itemPrice)}</p>
            <p className="mt-5">{itemDescription}</p>
            <button className="btn-primary mt-8" id='add_to_kart' onClick={handleAddToCart}>Add</button>
          </article>
        </div>
      </section>

    </main>
  )
}

// {/* Can change text, color, location */}
// Add add to cart 