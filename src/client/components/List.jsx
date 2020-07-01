import React from 'react';

const List = ({
  cowList, description, updateCow, deleteCow,
}) => (
  <div>
    <h2>
      Da Best Cows
    </h2>
    <ul>
      {cowList.map((cow) => (
        <li key={cow.id} onClick={() => description(`${cow.name}: ${cow.description}`)}>
          {cow.name}
          <span className="buttons">
            <button type="button" className="editButton" onClick={() => updateCow(`${cow.id}`)}>pimp ur cow</button>
            <button type="button" className="deleteButton" onClick={() => deleteCow(`${cow.id}`)}>destroy cow</button>
          </span>
        </li>
      ))}
    </ul>
  </div>
);

export default List;
