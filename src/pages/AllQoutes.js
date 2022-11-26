import React from 'react';
import QuoteList from "../components/quotes/QuoteList"
 const DUMMY_QUOTES=
 [
  {    id : 1,
  author :"rasha Daghlass",
  text:"react app"
},
{
  id : 2,
  author :"rasha Daghlass2",
  text:"react app2"

}]

const AllQuotes = () => {
 
  return (
    <div>
        <QuoteList quotes = {DUMMY_QUOTES}/>

    </div>
  )
}

export default AllQuotes