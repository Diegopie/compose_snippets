import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import App from './App';
import Home from './pages/Home';
import HomeB from './pages/Home-B';
import Products from './pages/Products';
import { getProductDetails, getProducts } from './api/products.api';
import PDP from './pages/PDP';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        index
        element={< Home />}
      />
      <Route
        path="/home"
        element={< HomeB />}
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