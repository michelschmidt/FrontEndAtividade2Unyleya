import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Products from './Pages/Products';
import Product from './Pages/Product';
import NotFound from './Pages/NotFound';
import Register from './Pages/Register';
import ProductReviews from './Pages/ProductsReviews';

function App() {
  return (    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/product/:id' element={<Product/>}>
        <Route path='reviews' element={<ProductReviews/>}/>  
      </Route>
      <Route path='/register' element={<Register/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
  );
}

export default App;
