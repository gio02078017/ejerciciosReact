import React, {Component } from 'react';
import PropTypes from 'prop-types';

const ANIMALES_IMAGES = {
    panda: 'https://goo.gl/oNbtoq',
    cat: 'https://goo.gl/PoQQXb',
    dolphin: 'https://goo.gl/BbiKCd',

}

const ANIMALS = Object.keys(ANIMALES_IMAGES)

class AnimalImage extends Component {
    state = { src : ANIMALES_IMAGES[this.props.animal]};

    componentWillReceiveProps(nextProps){
        console.clear()
        console.log('1. componentWillReceiveProps')
        console.log(nextProps);
        this.setState({src: ANIMALES_IMAGES[nextProps.animal]})
        //metodo para validar que no se realize un setState cuendo se preciona el mismo elemento
        /*if(this.props.animal !== nextProps.animal){
            console.log('setState?')
            this.setState({src: ANIMALES_IMAGES[nextProps.animal]})
        } */       
    }

    //este metodo es para evitar rederixados innecesaarios, tambiense puede utilizar el
    //"PureComponent" que lo tiene incluido pero tener precaucion en clases complejas
    shouldComponentUpdate(nextProps){
        console.log('2. shouldComponentUpdate');
        console.log('anterior:',this.props.animal);        
        console.log('nuevo:', nextProps.animal);        
        return this.props.animal !== nextProps.animal;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('3. componentWillUpdate', nextProps, nextState);
        const img = document.querySelector('img')
        console.log('from img element ', {alt: img.alt});
        //en esta se puede crear animaciones
        
        img.animate([
                {
                    filter: 'blur(0px)'
                },{
                    filter: 'blur(2px)'
                }
            ],{
                duration: 500,
                easing: 'ease'
            }
        )        
    }

    componentDidUpdate(nextProps, nextState){
        console.log('5. componentDidUpdate', nextProps, nextState);
        const img = document.querySelector('img')
        img.animate([
                {
                    filter: 'blur(2px)'
                },{
                    filter: 'blur(0px)'
                }
            ],{
                duration: 1500,
                easing: 'ease'
            }
        )  
        console.log('from img element ', {alt: img.alt});
        

    }

    render(){
        console.log('4. -> render')
        return (
            <div>
                <p>Selected {this.props.animal}</p>
                <img 
                    alt={this.props.animal}
                    src={this.state.src}
                    width= '250'
                />
            </div>
        )
    }
}

AnimalImage.protoTypes = {
    animal: PropTypes.oneOf(ANIMALS)
}

/*AnimalImage.defaultProps = {
    animal: 'panda'
}*/


class EjemploDeCicloDeActualizacion extends Component{

    state = {animal: 'panda'}

    _renderAnimalButton = (animal) => {
        return (
            <button
                // disabled = {animal === this.state.animal }
                key= {animal} 
                onClick={() => this.setState({animal})}>
                {animal}
            </button>
        )
    }

    render(){
        return(
            <div>
                <h4>Ciclo de Actualización, Ejemplo de : ComponentWillReceiveProps</h4>
                {ANIMALS.map(this._renderAnimalButton)}
                <AnimalImage animal={this.state.animal}/>
            </div>
        )
    }

}

export default EjemploDeCicloDeActualizacion;