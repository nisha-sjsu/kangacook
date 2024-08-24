import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/RecipeDetail.css';

function RecipeDetail({ selectedRecipe }) {
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        if (selectedRecipe) {
            axios.get(`http://localhost:8000/api/recipes/${selectedRecipe}/`)
                .then(response => setRecipe(response.data))
                .catch(error => console.error(error));
        }
    }, [selectedRecipe]);

    if (!recipe) return <div className="no-recipe">Select a recipe to view details.</div>;

    return (
        <div className="recipe-detail-container">
            <h2 className="recipe-detail-title">{recipe.title}</h2>
            <p className="recipe-description">{recipe.description}</p>
            <h3>Ingredients</h3>
            <p className="recipe-ingredients">{recipe.ingredients}</p>
            <h3>Instructions</h3>
            <p className="recipe-instructions">{recipe.instructions}</p>
        </div>
    );
}

export default RecipeDetail;
