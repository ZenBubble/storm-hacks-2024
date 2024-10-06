import { useState } from 'react';
import './App.css';

function Fridge() {
    const [ing, setIng] = useState("")
    const [ingredients, setIngredients] = useState([])
    const [selectedIngredients, setSelectedIngredients] = useState([])

    const handleAddIngredient = () => {
        if (ing.trim() !== "") {
            setIngredients([...ingredients, ing]);
            setIng("")
        }
    }

    const handleRemoveIngredient = (indexToRemove) => {
        setIngredients(ingredients.filter((_, index) => index !==
    indexToRemove))
    }

    const handleSelectIngredient = (ingredient) => {
        setSelectedIngredients([...selectedIngredients, ingredient])
    }

    const handleClearSelectedIngredients = () => {
        setSelectedIngredients([]);
    }
    
    return (
        <div className="fridge-container">
            <h1>Add to your fridge!</h1>
            <textarea
                value={ing}
                onChange={(e) => setIng(e.target.value)} />
            <button onClick={handleAddIngredient}>Add Ingredient</button>
                <div>
                {ingredients.map((ingredient, index) => (
                    <div className = "fridge-ingredient-button" key = {index}>
                        <span id = "ingredient-label">{ingredient}</span>
                        <button onClick = {() =>
                            handleRemoveIngredient(index)}>Remove</button>
                        <button onClick = {() =>
                            handleSelectIngredient(ingredient)}>Select</button>
                    </div>
                ))}
                <div>
                    <h2>Going into the pot:</h2>
                    <ul>
                        {selectedIngredients.map((ingredient, index) => (
                            <div className="selected-ingredient" key={index}>
                            {ingredient}
                        </div>
                        ))}
                    </ul>
                    <button onClick = {handleClearSelectedIngredients}>Clear Selected Ingredients</button>

                </div>
                </div>
        </div>

    )
}
export default Fridge