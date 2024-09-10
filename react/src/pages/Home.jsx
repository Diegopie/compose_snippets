import { useLoaderData } from "react-router-dom";
import ProductCard from "../layouts/ProductCard";

export default function Home() {

  const favoriteProducts = useLoaderData()

  return (
    <main>
      <header>
        <section className="flex p-8 gap-6 items-center">
          <aside>
            <h1 className="text-7xl text-center">Earth Echoes</h1>
            <p className="text-lg mt-6">Where nature enthusiasts embark on a digital journey into the wonders of the natural world! Our platform is a sanctuary for those who find solace, inspiration, and excitement in the beauty of our planet. </p>
          </aside>
          <img
            src='/hero-img.jpg'
            className="w-7/12 max-w-4xl object-cover"
          />
        </section>
        <section className="text-2xl text-center mt-44 p-4 bg-lime-600 ">
          <p>Discover, Explore, Connect: Unveiling Nature&apos;s Mysteries; Inspiration in Every Sunrise: Embrace the Beauty of the Wild</p>
        </section>
        <section>
          <h2 className="text-5xl text-center mt-14">Favorites</h2>
          <div className="flex flex-wrap gap-x-20 gap-y-24 mt-10 justify-center">
            {favoriteProducts.map(product => {
              return (
                <ProductCard key={product.id} product={product} />
              )
            })}
          </div>
        </section>
      </header>
    </main>
  )
}
