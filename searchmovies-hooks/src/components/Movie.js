import React from 'react';
import PropTypes from 'prop-types';

export const Movie = (props) => {

    /*propTypes = {
        id: PropTypes.string,
        title: PropTypes.string,
        year: PropTypes.string,
        poster: PropTypes.string
     }*/

     const {id, poster, title, year } = props;

     return(
        <a href={`/detail/${id}`} className="card">
            <div className="card-image">
                <figure className="image">
                <img src={poster} 
                     alt={title}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{title}</p>
                        <p className="subtitle is-6">{year}</p>
                    </div>
                </div>
            </div>
        </a>
    )

}