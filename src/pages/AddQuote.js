import QuoteForm from '../components/quotes/QuoteForm';

const AddQuote = () => {
  const addQuoteHandler = ({author, text}) => {
    // TODO: add a new quote to store
    console.log(author, text);
    // TODO: redirect to a list page
  };

  return (
    <QuoteForm onAddQuote={addQuoteHandler}/>
  );
};

export default AddQuote;