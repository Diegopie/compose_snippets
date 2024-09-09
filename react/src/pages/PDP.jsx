import { useLoaderData } from "react-router-dom"
import moneyFormatter from "../utils/moneyFormatter"


export default function PDP() {
  const { itemName, itemPrice, imageUrl, itemDescription } = useLoaderData()

  return (
    <main>
      <section className="bg-cyan-500 flex gap-6">
        <img src={imageUrl} className="h-96" />
        <div className="w-full">
          <div className="px-8">
            <h1 className=" mt-10 text-4xl">{itemName}</h1>
            <p className="mt-5">{moneyFormatter(itemPrice)}</p>
            <p className="mt-5">{itemDescription}</p>
          </div>

        </div>
      </section>
    </main>
  )
}