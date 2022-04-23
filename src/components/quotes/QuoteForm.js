import {useRef, useState} from 'react';

import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import {Prompt} from 'react-router-dom';

const QuoteForm = (props) => {
  const [isFilling, setIsFilling] = useState(false);

  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const blurFormHandler = (e) => {
    setIsFilling(true);
  };

  const finishFormFillingHandler = (e) => {
    setIsFilling(false);
  };

  return (
    <>
      <Prompt when={isFilling} message='You will loose your entered data if you leave!'/>
      <form className={classes.form} onSubmit={submitFormHandler} onBlur={blurFormHandler}>
        {props.isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner />
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button onClick={finishFormFillingHandler} className='btn'>Add Quote</button>
        </div>
      </form>
    </>
  );
};

export default QuoteForm;
