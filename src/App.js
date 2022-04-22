import Welcome from './pages/Welcome';
import {Route} from 'react-router-dom';
import Products from './pages/Products';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Route path='/welcome'>
          <Welcome/>
        </Route>
        <Route path='/products'>
          <Products/>
        </Route>
      </main>
    </div>
  );
}

export default App;
