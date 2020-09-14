import React from 'react';

export default function Recipe({ title, calories, image, ingredients }) {
  let index = 0;
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 p-2">
      <div className="card border-white h-100">
        <img className="card-img-top img-fluid" src={image} alt={image} />
        <div className="card-body">
          <h1 className="card-title">{title}</h1>
          <h2 className="card-text">Calories: {calories}</h2>
          <h2 className="card-text">Ingredients</h2>
          <ol className="list-group list-group-flush">
            {ingredients.map((ingredient) => (
              <li key={index++} className="list-group-item">
                {ingredient.text}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
