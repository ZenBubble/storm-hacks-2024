import React, { useState } from 'react';

import TestAi from './TestAi.jsx'
import DisplayRecipes from './DisplayRecipes.jsx'

function MainPage() {
    const [recipes, setRecipes] = useState([]);
    const updateRecipes = (newRecipes) => {setRecipes(newRecipes)}
    return (
        <>
        <TestAi updateRecipes={updateRecipes} recipes={recipes}/>
        <DisplayRecipes recipeData={recipes}/>
        </>
    )
}

export default MainPage
