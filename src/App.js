import Welcome from './pages/Welcome';
import {Redirect, Route, Switch} from 'react-router-dom';
import Products from './pages/Products';
import Header from './components/Header';
import Product from './pages/Product';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Switch>
          <Route path='/' exact>
            <Redirect to={Welcome}/>
          </Route>
          <Route path='/welcome'>
            <Welcome/>
          </Route>
          <Route path='/products' exact>
            <Products/>
          </Route>
          <Route path='/products/:productId'>
            <Product/>
          </Route>
          <Route path='*'>
            <>Fallback</>
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
