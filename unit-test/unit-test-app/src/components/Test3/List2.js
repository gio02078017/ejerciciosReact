import React from 'react'

const List2 = ({ title, list }) => {
  return (
    <section>
      <h1 className='big'>{ title }w</h1>
      <ul>
        {list.map(item => (
          <li key={item.id}>
            { item.name }
          </li>
        ))}
      </ul>
    </section>
  )
}

export default List2
