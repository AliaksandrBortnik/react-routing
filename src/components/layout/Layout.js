import MainNavigation from './MainNavigation';
import {Redirect, Route, Switch} from 'react-router-dom';
import Quotes from '../../pages/Quotes';
import AddQuote from '../../pages/AddQuote';
import QuoteDetail from '../../pages/QuoteDetail';

const Layout = () => {
  return (
    <div>
      <MainNavigation/>
      <main>
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
      </main>
    </div>
  );
};

export default Layout;