import React from 'react'

const Title = () => (
  <h1>Introduccion a Unit Testing Component</h1>
)

const ComponentTest1 = () => {
  return (
    <section id='main'>
      <h1>Introduccion a Unit Testing Component</h1>
      {/*<Title/>*/}
      <div className='container'>
        <span num={3} active={false}>Primero</span>
        <span num='3' active='false'>Segundo</span>
      </div>
      <input type='text' />
      <input type='checkbox' />
    </section>
  )
}

export default ComponentTest1