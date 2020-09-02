import React from 'react';

export default function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className="card border-white">
      <img className="card-img-top img-fluid" src={image} alt={image} />
      <div className="card-body">
        <h1 className="card-title">{title}</h1>
        <h2 className="card-text">Calories: {calories}</h2>
        <h2 className="card-text">Ingredients</h2>
        <ol className="list-group list-group-flush">
          {ingredients.map((ingredient) => (
            <li key={ingredient.text} className="list-group-item">
              {ingredient.text}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
