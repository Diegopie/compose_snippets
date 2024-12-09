import { useLoaderData } from "react-router-dom";

export default function QA() {

  return (
    <main className="px-32 mb-12">
      <h1 className="text-center mt-20 text-6xl">All Products</h1>
      <section className="flex flex-wrap gap-x-20 gap-y-24 mt-10 justify-center" data-testid="goals_buttons">
        {/* Revenue */}
        <article className="product-card w-60 text-center bg-cyan-500 py-4 px-14 rounded-md">
            <img src="https://picsum.photos/200" className="h-52" />
            <h2 className="text-3xl">Simulate Revenue</h2>
            <button data-testid="revenue">Click Me</button>
        </article>
        {/* Custom 01 */}
        <article className="product-card w-60 text-center bg-cyan-500 py-4 px-14 rounded-md">
            <img src="https://picsum.photos/200" className="h-52" />
            <h2 className="text-3xl">Simulate Custom 01</h2>
            <button data-testid="revenue">Click Me</button>
        </article>
        {/* Custom 02 */}
        <article className="product-card w-60 text-center bg-cyan-500 py-4 px-14 rounded-md">
            <img src="https://picsum.photos/200" className="h-52" />
            <h2 className="text-3xl">Simulate Custom 02</h2>
            <button data-testid="revenue">Click Me</button>
        </article>
      </section>
    </main>
  )
}