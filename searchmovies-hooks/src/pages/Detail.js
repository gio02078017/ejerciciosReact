import React,{useState,useEffect} from 'react';
import axios from 'axios';

import {ButtonBackToHome} from '../components/ButtonBackToHome'

const APPI_KEY = '3fb09886'
export const Detail = (props) => {

    const { id } = props.match.params;

    const [movie, setMovie] = useState({})

    useEffect( async () => {    
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${APPI_KEY}&i=${id}`);
        const res = await response.data;
        setMovie(res)

    },[]);

    return (
        <div className="container">
        <ButtonBackToHome/>
        <div className="container-width">
            <h1 className="title">{movie.Title}</h1>
            <div className="card-image">
                <figure className="image">
                <img src={movie.Poster} 
                    alt={movie.Title}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{movie.Director}</p>
                        <p className="subtitle is-6">{movie.Metascore}</p>
                        <p className="paragraph">{movie.Plot}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

}
