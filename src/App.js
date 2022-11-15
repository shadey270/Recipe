import React, {useState, useEffect} from "react";
import axios from "axios";
import Recipe from "./Recipe";
import './App.css';
import ReactTyping from "./ReactTyping";





function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('chicken');
  const[search, setSearch] = useState('');

  const options = {
    method: 'GET',
    url: 'https://edamam-recipe-search.p.rapidapi.com/search',
    params: {q: `${query}`},
    headers: {
      'X-RapidAPI-Key': 'f9b7ebf51cmsh8e8ccdb1d7ef808p1b06bbjsnee8b8fc96ccd',
      'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
    }
  };

  useEffect(() => {
  axios.request(options).then(function (response) {
   setRecipes(response.data.hits);
  }).catch(function (error) {
    console.error(error);
  });
}, [query])

const handleChange = e => {
  setSearch(e.target.value)
}
const getSearch = e => {
  e.preventDefault();
  setQuery(search);
}
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input type="text" value={search} onChange={handleChange} className="search-bar"  />
        <button type="submit" className="bg-gray-700 px-5 py-4 text-white">Search</button>
      </form>
      <div>
        <h2 className="text-center text-4xl text-bold text-white my-4">Search all kinds of <ReactTyping /></h2>
      </div>
      <div className="recipe">
      {recipes.map(recipe => (
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

export default App
