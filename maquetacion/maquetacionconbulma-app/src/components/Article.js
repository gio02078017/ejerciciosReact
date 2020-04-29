import React, { Component  } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {

    static propTypes = {
        author: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        authorization: PropTypes.number.isRequired 
    }

    render () {

        const { author, children, date, title, authorization } = this.props;

        return (
            <section>
                <h2>{title}</h2>
                <p><em>Escrito por {author}</em></p>
                <date>{date}</date>
                <p>usted autoriza enviar informacion {authorization}</p>
                <article>
                   {children}  
                </article>
            </section>
        )
    }
}

export default Article;