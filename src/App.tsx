import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="/shopping-cart" element={ <ShoppingCart /> } />
        <Route path="/product-details/:id" element={ <ProductDetails /> } />
      </Route>
    </Routes>
  );
}

export default App;
