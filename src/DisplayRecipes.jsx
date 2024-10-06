import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import './App.css';

function DisplayRecipes({recipeData, updateSelected, select}) {

    const handleButtonClick = (recipe) => {
        updateSelected(recipe);
    };

    return (
        <div>
            {Object.keys(recipeData).length > 0 &&
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
{/*                 
                 {selectedRecipe && (
                <div className="result-container">
                    <h3>Ingredients:</h3>
                    <p>{selectedRecipe.ingredients}</p>
                    <h3>Recipe:</h3>
                    <p>{selectedRecipe.steps}</p>

                </div>
            )}  */}

            </div>

}
        </div>
    );
};

export default DisplayRecipes;