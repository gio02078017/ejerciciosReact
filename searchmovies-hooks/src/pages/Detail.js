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

    const {Title, Poster, Director, Metascore, Plot } = movie;

    return (
        <div className="container">
        <ButtonBackToHome/>
        <div className="container-width">
            <h1 className="title">{Title}</h1>
            <div className="card-image">
                <figure className="image">
                <img src={Poster} 
                    alt={Title}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{Director}</p>
                        <p className="subtitle is-6">{Metascore}</p>
                        <p className="paragraph">{Plot}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )

}
