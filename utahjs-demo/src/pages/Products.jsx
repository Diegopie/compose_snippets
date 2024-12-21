import { useLoaderData } from "react-router-dom";
import ProductCard from "../layouts/ProductCard";

export default function Products() {

  const products = useLoaderData()


  return (
    <main className="px-32 mb-12">
      <h1 className="text-center mt-20 text-6xl">All Products</h1>
      <section className="flex flex-wrap gap-x-20 gap-y-24 mt-10 justify-center">
        {products.map(product => {
          return (
            <ProductCard key={product.id} product={product} />
          )
        })}
      </section>
    </main>
  )
}