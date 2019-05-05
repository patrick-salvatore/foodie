import React from 'react'

const RecipeList = props => {
  return (
    <div className='container'>
    <div className='row'>
        {props.recipes.map(recipe => {
        return (
            <div key = {recipe.title} className="card" style={{width: '18rem', marginBottom: '2em', marginRight: '1em'}}>
            <img className="card-img-top" src={recipe.image_url} alt ={recipe.title}/>
                <p className = 'card-text'></p>
            <div className="card-body">
                <h5 className="card-title">{recipe.title.length > 25 ? `${recipe.title.substring(0,20)}...` : `${recipe.title}`}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">View</a>
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