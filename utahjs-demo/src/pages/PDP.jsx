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
            <p className="mt-5 mb-6">{itemDescription}</p>
            <div className="min-h-8">
              <p data-test-id="a" className=" text-white bg-red-300">Act Now and Save 25%</p>
              <p data-test-id="b" className=" text-white bg-red-300">Free Shipping on all orders over $50</p>
              <p data-test-id="c" className=" text-white bg-red-300">Money Back Guarantee</p>
            </div>
            <button className="btn-primary mt-3" id='add_to_kart' onClick={() => {
              window.compose.dispatchEvent(
                new CustomEvent(`goal:copy_01`)
              );
              handleAddToCart()
            }}>Add</button>
          </article>
        </div>
      </section>

    </main>
  )
}

// {/* Can change text, color, location */}
// Add add to cart 