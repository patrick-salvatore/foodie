import React from 'react';
import './Form.css';
import FaSearch from 'react-icons/lib/fa/search';

const Form = props => {
  return (
    <div>
      <form className = 'searchForm' onSubmit={props.getRecipes}>
        <input className= 'searchField' type ='text' name='recipeSearch' placeholder='Recipe'></input>
        <button style = {styles.button} type='submit'> <FaSearch/> </button>
      </form>
    </div>
  )
}
export default Form;


const styles = {
  button: {
    border: 'none',
  }
}