import Layout from './components/layout/Layout';
import {Navigate, Route, Routes} from 'react-router-dom';
import Quotes from './pages/Quotes';
import QuoteDetail from './pages/QuoteDetail';
import AddQuote from './pages/AddQuote';
import NotFound from './pages/NotFound';
import Comments from './components/comments/Comments';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Navigate to='/quotes' replace />} />
        <Route path='/quotes' element={<Quotes/>} />
        {/* Allow nested routes for quote detail*/}
        <Route path='/quotes/:quoteId/*' element={<QuoteDetail/>}>
          <Route path='comments' element={<Comments/>}/>
        </Route>
        <Route path='/new-quote' element={<AddQuote/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Layout>
  );
}

export default App;
