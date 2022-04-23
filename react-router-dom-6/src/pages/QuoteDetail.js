import {Link, Route, useParams, useRouteMatch} from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_DATA = [
  { id: '1', text: 'Loooong test', author: 'Peter' },
  { id: '2', text: 'Loooong test 2', author: 'Rob' },
  { id: '3', text: 'Loooong test 3', author: 'Jake' }
];

const QuoteDetail = (props) => {
  const {quoteId} = useParams();
  const match = useRouteMatch();

  // TODO: get data from API regarding a received quoteId
  const quote = DUMMY_DATA.find(quote => quote.id === quoteId);

  if (!quote) {
    // return <NoQuotesFound/>;
    return <p>Sorry, no quote found!</p>;
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments/>
      </Route>
    </>
  );
};

export default QuoteDetail;