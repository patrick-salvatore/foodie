import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Recipe extends Component {
    constructor() {
        super()
        this.state = {
            display: []
        }
    }

    componentDidMount = async () => {
        let title = this.props.location.state.recipe
        let res = await fetch (`https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`)
        let data = await res.json()
        this.setState({display: data.recipes[0]})
        console.log()
    }

  render() {
    return (
      <div>
          <div className="active-recipe">
            <img className="active-recipe__img" src={this.state.display.image_url} alt={this.state.display.title}/>
            <h3 className="active-recipe__title">{ this.state.display.title }</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{ this.state.display.publisher }</span>
            </h4>
            <p className="active-recipe__website">Website: 
              <span><a href={this.state.display.publisher_url}>{this.state.display.publisher_url}</a></span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
      </div>
    )
  }
}

const API_KEY = process.env.REACT_APP_API_KEY


export default Recipe;