import React from 'react';
import style from './recipe.module.css';

function Recipe({title, calories, image, ingredients}) {
  return (
    <div className={style.recipe}>
        <div>
        <h1>{title}</h1>
        <p>{calories}</p>
        <img src={image} className={style.recipe} alt='' />
        <ol>
            {ingredients.map(ingredient => (
              <li>{ingredient.text}</li>
            ))}
          </ol>
        </div>
      
       
    </div>
  )
}

export default Recipe