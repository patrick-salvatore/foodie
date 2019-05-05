import React from 'react'
import {Link} from 'react-router-dom'

const RecipeList = props => {
  return (
    <div className='container'>
    <div className='row'>
        {props.recipes.map(recipe => {
        return (
            <div key = {recipe.title} className="card" style={{width: '18rem', marginBottom: '1em', marginRight: '1em', marginLeft:'1em'}}>
            <img className="card-img-top" style ={{height: '300px'}}src={recipe.image_url} alt ={recipe.title}/>
                <p className = 'card-text'></p>
            <div className="card-body">
                <h5 className="card-title">{recipe.title.length > 25 ? `${recipe.title.substring(0,20)}...` : `${recipe.title}`}</h5>
                <p className="card-text">{recipe.publisher}</p>
                <Link to ={{
                    pathname: `/recipe/${recipe.recipe_id}`,
                    state: {recipe: recipe.title}
                }}>
                    <button className="btn btn-primary">View</button>
                </Link>
            </div>
            </div>
         );
        })
        }
    </div>
    </div>
  )
}

export default RecipeList