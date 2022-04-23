import QuoteForm from '../components/quotes/QuoteForm';
import {useHistory} from 'react-router-dom';

const AddQuote = () => {
  const history = useHistory();

  const addQuoteHandler = ({author, text}) => {
    // TODO: add a new quote to store
    console.log(author, text);
    history.push('/quotes');
  };

  return (
    <QuoteForm onAddQuote={addQuoteHandler}/>
  );
};

export default AddQuote;