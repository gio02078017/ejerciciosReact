import React, {Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ButtonBackToHome } from '../components/ButtonBackToHome';

const APPI_KEY = '3fb09886'

class Detail extends Component{

    static propTypes = {
       //id: PropTypes.string
       match: PropTypes.shape({
           params: PropTypes.object,
           isExact: PropTypes.bool,
           path: PropTypes.string,
           url: PropTypes.string
       })
    }

    state = {movie: {}}

    _fetchMovie({id}){
        fetch(`http://www.omdbapi.com/?apikey=${APPI_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                console.log(movie);
                this.setState({movie})           
            })
    }

    componentDidMount(){        
        //const { id } = this.props;
        console.log(this.props);        
        const { id } = this.props.match.params;
        this._fetchMovie({id})
    }

    _goBack(){
        window.history.back();
    }

    render (){

        const {Title, Poster, Director, Metascore, Plot } = this.state.movie;

        /*return(
            <div>
                <ButtonBackToHome/>
                <button onClick={this._goBack}>Volver</button>
                <h1>{Title}</h1>
                <img src={Poster}/>
                <h3>{Actor}</h3>
                <span>{Metascore}</span>
                <p>{Plot}</p>
            </div>
        )*/

        return(
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
} 

export default Detail;
