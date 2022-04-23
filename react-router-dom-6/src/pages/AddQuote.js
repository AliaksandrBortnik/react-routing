import QuoteForm from '../components/quotes/QuoteForm';
import {useNavigate} from 'react-router-dom';

const AddQuote = () => {
  const navigate = useNavigate();

  const addQuoteHandler = ({author, text}) => {
    // TODO: add a new quote to store
    console.log(author, text);
    navigate('/quotes');
  };

  return (
    <QuoteForm onAddQuote={addQuoteHandler}/>
  );
};

export default AddQuote;