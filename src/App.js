import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';

export default function App() {
  const APP_ID = `********`;
  const APP_KEY = `*********`;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getSearch = (event) => {
    event.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="container-fluid p-4">
      <form onSubmit={getSearch}>
        <div className="form-group">
          <input
            name="search"
            className="form-control"
            type="text"
            value={search}
            onChange={updateSearch}
            placeholder="Enter any ingredient"
          />
        </div>
        <div className="text-center p-4">
          <button className="btn btn-light center" type="submit">
            Search
          </button>
        </div>
      </form>
      <div className="row">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}
