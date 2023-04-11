import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
//import Header from './components/Header';
//import Loading from './components/Loading';

//const Home = lazy(() => import('./pages/Home'));
//const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./composants/Products'));
const NotFound = lazy(() => import('./composants/NotFound'));
const ProductDetails = lazy(() => import('./composants/ProductDetails'));

function App() {
  return (
    <div className="App">
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/*' element={<NotFound />} > </Route>
            <Route path='/products/:id' element={<ProductDetails/>} > </Route>
                
        </Routes>

    </Suspense>



</div>
  );
}

export default App;
