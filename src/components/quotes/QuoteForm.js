import { useRef, useState } from 'react';

import Card from '../ui/Card';
import LoadingSpinner from '../ui/LoadingSpinner';
import classes from './QuoteForm.module.css';
import { db } from '../utils/firebase';
import { ref, set, get, update, remove, child } from "firebase/database"

const QuoteForm = (props) => {
  const insertdata = () =>{

    set(ref(db, "Authors/"+authorInputRef.current.value),
    {
      Author:authorInputRef.current.value,
      Qoute:textInputRef.current.value
    }).then(()=>{alert("The Data added succefuly")})
    .catch((err)=>{alert("There's some mistake "+err)})
  }



  const authorInputRef = useRef();
  const textInputRef = useRef();
  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
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
          <button className='btn' onClick={()=>insertdata()}>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
