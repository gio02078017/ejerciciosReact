import React,{useState, useEffect} from 'react';
import axios from 'axios';


const APPI_KEY = '3fb09886'
export const SearchForm = (props) => {

   const [inputMovie, setInputMovie ] = useState("")

   const _handleChange = (e) => {
    const data =  e.target.value;  
    setInputMovie(data)
    }

    const  _handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${APPI_KEY}&s=${inputMovie}`);
        const res = await response.data;
        const {Search = [], totalResults } = res;
        props.onResults(Search)

      }

   return (

    <form onSubmit= {_handleSubmit}>
        <div className="field has-addons">
            <div className="control">
                <input
                onChange = {_handleChange} 
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

