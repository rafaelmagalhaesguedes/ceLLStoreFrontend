import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Home /> } />
        <Route path="/shopping-cart" element={ <ShoppingCart /> } />
      </Route>
    </Routes>
  );
}

export default App;
