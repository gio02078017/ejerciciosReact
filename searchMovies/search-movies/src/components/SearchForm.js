import React, {Component } from 'react';

const APPI_KEY = '3fb09886'
class SearchForm extends Component{

    state = {
        inputMovie: ''
    }

    _handleChange = (e) => {
        this.setState({inputMovie: e.target.value})
    }

    _handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.inputMovie);
        const {inputMovie} = this.state;
        fetch(`http://www.omdbapi.com/?apikey=${APPI_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                console.log(results);  
                const {Search = [], totalResults } = results;
                //const searchResults = Search || [];
                console.log({Search, totalResults});                
                //this.props.onResults(searchResults);             
                this.props.onResults(Search);             
            })
      }

    render (){
        return(
            <form onSubmit= {this._handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input
                      onChange = {this._handleChange} 
                      className="input" 
                      type="text" 
                      placeholder="Movie to search ..."/>
                </div>
                <div className="control">
                    <button className="button is-info">
                        Search
                    </button>
                </div>
            </div>
            </form>
        )
    }
} 

export default SearchForm;
