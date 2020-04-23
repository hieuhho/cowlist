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
            <span className="buttons">
            <button className="editButton" onClick={() => props.update(`${cow.id}`)}>pimp ur cow</button>
            <button className="deleteButton" onClick={() => props.delete(`${cow.id}`)}>destroy cow</button>

            </span>
            </li>
        })}
      </ul>


  </div>
)

export default List;