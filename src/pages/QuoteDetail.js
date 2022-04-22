import {Route, useParams} from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import Comments from '../components/comments/Comments';

const QuoteDetail = (props) => {
  const {quoteId} = useParams();

  // TODO: get data from API regarding a received quoteId

  return (
    <>
      <QuoteForm

      />
      <Route path='/quotes/:quoteId/comments'>
        <Comments/>
      </Route>
    </>
  );
};

export default QuoteDetail;