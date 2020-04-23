import React from 'react';

const List = (props) => (
  <div>
    <h2>
      Da Best Cows
    </h2>
      <ul>
        {props.cowList.map((cow) => {
          return <li key={cow.id} onClick={() => props.description(`${cow.name}: ${cow.description}`)} >
            {cow.name}
            </li>
        })}
      </ul>


  </div>
)

export default List;