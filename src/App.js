import logo from './logo.svg';
import './App.css';
import ProductRegistration from './components/ProductRegistration';
import ProductSearch from './components/ProductSearch';
import ProductShop from './components/ShoppingCart';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <div>
     <ProductRegistration />
     <ProductSearch />
     <ShoppingCart />
    </div>
  );
}

export default App;
