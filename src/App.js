import Layout from './components/layout/Layout';
import {Redirect, Route, Switch} from 'react-router-dom';
import Quotes from './pages/Quotes';
import QuoteDetail from './pages/QuoteDetail';
import AddQuote from './pages/AddQuote';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes'/>
        </Route>
        <Route path='/quotes' exact>
          <Quotes/>
        </Route>
        <Route path='/quotes/:quoteId'>
          <QuoteDetail/>
        </Route>
        <Route path='/new-quote'>
          <AddQuote/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
