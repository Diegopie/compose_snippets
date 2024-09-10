import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App';
import Home from './pages/Home';
import HomeB from './pages/Home-B';
import Products from './pages/Products';
import { getProductDetails, getProducts, getTenProducts } from './api/products.api';
import PDP from './pages/PDP';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        index
        element={< Home />}
        loader={() => {
          const products = getTenProducts()
          return products
        }}
      />
      <Route
        path="/home"
        element={< HomeB />}
        loader={() => {
          const products = getTenProducts()
          return products
        }}
      />
      <Route
        path="/products"
        element={< Products />}
        loader={async () => {
          const products = await getProducts()
          return products
        }}
      />
      <Route
        path="/product/:id"
        element={< PDP />}
        loader={async ({params}) => {
          const product = await getProductDetails({id: params.id})
          return product
        }}
      />

    </Route>,
  ),
);

export default router;