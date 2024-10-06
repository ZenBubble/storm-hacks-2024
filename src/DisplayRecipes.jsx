import React, { useState } from 'react';
import Button from '@mui/material/Button';
import './App.css';


const recipeData = [
    { id: 1, name: 'rec1', ingredients: 'parsley, salt, ice', recipe: 'hahe' },
    { id: 2, name: 'rec2', ingredients: 'oregano, meat, powder', recipe: 'heha' },
    { id: 3, name: 'rec3', ingredients: 'tomato', recipe: 'h00he' },
    { id: 4, name: 'rec4', ingredients: 'tomatotomato', recipe: 'h00he' },
    { id: 5, name: 'rec5', ingredients: 'tomatotomatotomato', recipe: 'h00he' }
];

function DisplayRecipes() {

    const [selectedRecipe, setSelectedRecipe] = useState('');

    const handleButtonClick = (recipe) => {
        setSelectedRecipe(recipe);
    };

    return (
        <div>
            <h1>Your Recipes:</h1>
            <div className="container">
                <div className="scroll-container">
                    {recipeData.map((item) => (
                        <div key={item.id} className="button-container">
                            <Button variant="contained" onClick={() =>
                                handleButtonClick(item)} className="full-width-button">
                                {item.name}
                            </Button>
                        </div>
                    ))}
                </div>
                {selectedRecipe && (
                <div className="result-container">
                    <h3>Ingredients:</h3>
                    <p>{selectedRecipe.ingredients}</p>
                    <h3>Recipe:</h3>
                    <p>{selectedRecipe.recipe}</p>

                </div>
            )}

            </div>

            
        </div>
    );
};

export default DisplayRecipes;