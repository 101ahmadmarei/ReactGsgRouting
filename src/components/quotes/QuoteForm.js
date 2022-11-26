import { useRef, useState } from 'react';

import Card from '../ui/Card';
import LoadingSpinner from '../ui/LoadingSpinner';
import classes from './QuoteForm.module.css';
import { db } from '../utils/firebase';
import { ref, set, get, update, remove, child } from "firebase/database"

const QuoteForm = (props) => {
  const [obj, setObj] = {
    db: db,
    author: "",
    thequote: "",
  }
  const getAllInputs = () => {
    return {

      author: obj.author,
      thequote:obj.thequote
    }

  }
  const insertdata = () =>{
    const db = obj.db
    const data = getAllInputs()

    set(ref(db, "author/"+data.author))
  }
  const addData = (event) => {
    const id = event.target.id
    if (id == "btnAdd") {
      insertdata()
    }
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
          <input onChange={e => { setObj({ author: e.target.value }) }} type='text' id='author' ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn' id='btnAdd' onClick={addData}>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
