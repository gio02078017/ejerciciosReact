import React, { Component  } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        fecha: PropTypes.any.isRequired,
        authorization: PropTypes.number.isRequired 
    }

    render () {

        const { author, children, fecha, title, authorization } = this.props;

        return (
            <section>
                <h2>{title}</h2>
                <p><em>Escrito por {author}</em></p>
                <p>{fecha}</p>
                <p>usted autoriza enviar informacion {authorization}</p>
                <article>
                   {children}  
                </article>
            </section>
        )
    }
}

export default Article;