import {Fragment} from 'react';

import QuoteItem from './QuoteItem';
import NoQuotesFound from './NoQuotesFound';
import classes from './QuoteList.module.css'
import {useHistory, useLocation, useRouteMatch} from 'react-router-dom';

const sortQuotes = (quotes, isAsc) => {
  if (isAsc) {
    return quotes.sort((a, b) => a.id < b.id ? 1 : -1);
  } else {
    return quotes.sort((a, b) => a.id > b.id ? 1 : -1)
  }
};

const QuoteList = (props) => {
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();

  const queryParams = new URLSearchParams(location.search);
  const isAscSort = queryParams.get('sort') === 'asc';
  const sortedQuotes = sortQuotes([...props.quotes], isAscSort);

  const changeSortOrderHandler = () => {
    history.push(`${match.path}?sort=` + (isAscSort ? 'desc' : 'asc'));
    // history.push({
    //   pathname: match.path, // location.pathname
    //   search: `?sort=${(isAscSort ? 'desc' : 'asc')}`
    // });
    sortQuotes(props.quotes, isAscSort);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortOrderHandler}>Sort {isAscSort ? 'Descending' : 'Ascending'}</button>
      </div>
      {props.quotes.length === 0 && <NoQuotesFound/>}
      {
        props.quotes.length > 0 &&
        <ul className={classes.list}>
          {sortedQuotes.map((quote) => (
            <QuoteItem
              key={quote.id}
              id={quote.id}
              author={quote.author}
              text={quote.text}
            />
          ))}
        </ul>
      }
    </Fragment>
  );
};

export default QuoteList;
