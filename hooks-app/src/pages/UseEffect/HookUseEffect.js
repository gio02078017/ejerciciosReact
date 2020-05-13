import React, { useState, useEffect } from 'react'


const Header = () => {
    const styles = {
      background: 'linear-gradient(20deg, #6813cb, #2575fc)',
      textAlign: 'center',
      borderRadius: '0.2em',
      color: '#FFF',
      padding: '0.3em',
      margin: '0.3em',
      fontSize: '14px'
    }
  
    return (
      <header style={styles}>
        <h1>
          Hook useState
          <span
            role='img'
            aria-label='hook emoji'
          >
            ⚓
          </span> 
        </h1>
      </header>
    )
  }

export const HookUseEffect = () => {
    const [ clicks, setClicks ] = useState(0)

    useEffect(() => {
      // componentDidMount
      // componentDidUpdate
      console.log('Dentro de useEffect', clicks)
      console.log('%c------------------------', 'color: green')
      
      return () => {
        // componentWillUnmount
        console.log('Return de useEffect', clicks)
      }
    })
  
    const add = () => setClicks(clicks + 1)
  
    return (  
      <div>
        <Header />
        <button onClick={add}>
          Clicks ({ clicks })
        </button>
      </div>
    )
}