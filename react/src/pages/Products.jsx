import { Link, useLoaderData } from "react-router-dom";
import moneyFormatter from "../utils/moneyFormatter";

export default function Products() {

  const products = useLoaderData()


  return (
    <main className="px-32 mb-12">
      <h1 className="text-center mt-20 text-6xl">All Products</h1>
      <section className="flex flex-wrap gap-x-20 gap-y-24 mt-10 justify-center">
        {products.map(product => {
          const { id, itemName, itemPrice, imageUrl } = product;
          return (
            <article key={id} className="w-60 text-center bg-cyan-500 py-4 px-14 rounded-md">
              <Link to={`/product/${id}`}>
              <img src={imageUrl} className="h-52"/>
                <h2 className="text-3xl">{itemName}</h2>
                <p className="text-xl mt-6">{moneyFormatter(itemPrice)}</p>

              </Link>
            </article>
          )
        })}
      </section>
    </main>
  )
}