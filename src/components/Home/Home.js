import React, { Component } from 'react'
import './Home.css'
import Form from '../Form/Form'
import RecipeList from '../Recipes/RecipeList.js'

export default class Home extends Component {
    constructor() {
      super() 
      this.state = {
        recipes: []
      }
      this.getRecipes = this.getRecipes.bind(this)
    }

    async getRecipes(e) {
      e.preventDefault();
      let searchInput = e.target.elements.recipeSearch.value
      let res = await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${searchInput}`)
      
      let data = await res.json();
      console.log(data)
      this.setState({recipes: data.recipes})
    }

  render() {
    return (
      <div>
        <header style={styles.header}>
          <h1 style={styles.title}>Welcome to Your Personal Home Chef</h1>
        </header>
        <Form getRecipes={this.getRecipes}/> 
        <RecipeList recipes = {this.state.recipes}/>
      </div>
    )
  }
}

const API_KEY = process.env.REACT_APP_API_KEY

const styles = {
  header: { 
    display: 'flex',
    justifyContent: 'center', 
    alignItems: 'center',
    height: '100px',
    width: '100vw',
    backgroundColor: '#018489'
  },
  title: {
    color: '#e8e8e8'
  }
}

