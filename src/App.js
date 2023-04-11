import React, { Suspense, lazy } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

//import Header from './components/Header';
//import Loading from './components/Loading';

//const Home = lazy(() => import('./pages/Home'));
//const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./comoosants/Product'));

function App() {
  return (
    /*<Router>
      <Header />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Suspense>
  </Router>*/

  <Router>
    <Switch>
      <Route path="/products" component={Products}/>
      
    </Switch>
    </Router>
  );
}

export default App;
