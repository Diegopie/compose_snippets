import ProductCard from './ProductCard';
import { useGlobalContext } from '../context/GlobalContext';
import { actionRemoveFromCart, actionToggleCart } from '../context/GlobalActions';
import moneyFormatter from '../utils/moneyFormatter';

export const Cart = () => {

  const [{ cartItems, cartClosed, cartTotal }, globalDispatch] = useGlobalContext()

  console.log(cartTotal);
  return (
    <section className="relative">
      <div
        className={`fixed top-0 right-0 w-96 bg-teal-600 text-white p-6 transform transition-transform duration-300 h-screen ${cartClosed ? 'translate-x-full' : 'translate-x-0'
          }`}
      >
        <div className='flex flex-col justify-between h-screen'>
          <div className='relative overflow-auto'>
            <header className='h-8'>
              <button
                className='absolute right-5 top-1 font-bold text-lg'
                onClick={() => globalDispatch(actionToggleCart())}
              >X</button>
              <h2 className="text-xl font-bold">Cart</h2>
            </header>

            <section>
              {cartItems.map(product => {
                console.log(product);
                return (
                  <div className="bg-cyan-500 mt-3 relative">
                    <button
                      className='absolute right-5 top-3 font-bold'
                      onClick={() => globalDispatch(actionRemoveFromCart(product.id))}
                    >X</button>
                    <div className="flex gap-6 py-5">
                      <img src={product.imageUrl} className="h-16" />
                      <article className="px-8 w-full">
                        <h3 className="text-lg">{product.itemName}</h3>
                        <p className="mt-5">{moneyFormatter(product.itemPrice)}</p>
                      </article>
                    </div>
                  </div>
                )
              })}
            </section>
          </div>

          <footer className="text-white py-6 bottom-0 w-full mb-8">
            <p className='text-xl'>Total: <span>{moneyFormatter(cartTotal)}</span></p>
            <button className='btn-primary text-2xl mt-6'>Checkout</button>
          </footer>
        </div>

      </div>
    </section>
  );
};
