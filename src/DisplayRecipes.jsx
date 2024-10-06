import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import './App.css';

function DisplayRecipes({recipeData}) {
    const [selectedRecipe, setSelectedRecipe] = useState('');

    console.log(recipeData)

    
    // useEffect(() => {
    //     window.addEventListener('mousemove', () => {
    //        setRecipeData(JSON.parse(localStorage.getItem('recipes')) || [])  
    //        console.log("got event")
    //     }); }, [])


    const handleButtonClick = (recipe) => {
        setSelectedRecipe(recipe);
    };

    return (
        <div>
            <h1>Your Recipes:</h1>
            <div className="container">
                <div className="scroll-container">
                    {recipeData.map((item) => (
                        <div key={item.name} className="button-container">
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
                    <p>{selectedRecipe.steps}</p>

                </div>
            )}

            </div>

            
        </div>
    );
};

export default DisplayRecipes;