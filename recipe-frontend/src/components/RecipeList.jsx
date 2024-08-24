import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/RecipeList.css';

function RecipeList({ setSelectedRecipe }) {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/recipes/')
            .then(response => setRecipes(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="recipe-list-container">
            <h1 className="recipe-list-title">Recipe List</h1>
            <ul className="recipe-list">
                {recipes.map(recipe => (
                    <li key={recipe.id} className="recipe-item" onClick={() => setSelectedRecipe(recipe.id)}>
                        {recipe.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeList;
