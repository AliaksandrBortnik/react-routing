import QuoteList from '../components/quotes/QuoteList';

const Quotes = () => {
  const DUMMY_DATA = [
    { id: '1', text: 'Loooong test', author: 'Peter' },
    { id: '2', text: 'Loooong test 2', author: 'Rob' },
    { id: '3', text: 'Loooong test 3', author: 'Jake' }
  ];

  return <QuoteList quotes={DUMMY_DATA}/>;
};

export default Quotes;