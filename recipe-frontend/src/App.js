import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

function App() {
    const [selectedRecipe, setSelectedRecipe] = useState(null);

    return (
        <div className="App">
            <RecipeList setSelectedRecipe={setSelectedRecipe} />
            <RecipeDetail selectedRecipe={selectedRecipe} />
        </div>
    );
}

export default App;
