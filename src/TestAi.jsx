import { useState, useEffect } from 'react';
import './styles.css'

function TestAi({ recipes, updateRecipes }) {
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

    useEffect(() => {
        // Retrieve data from localStorage and parse it as an array
        const storedData = localStorage.getItem('myData');
        if (storedData) {
            updateRecipes(JSON.parse(storedData)); // Parse stored JSON string into an array
        }
    }, []);

    async function callOpenAIApi() {
        const inp = selectedIngredients.toString()
        const APIBody = { inp };
        await fetch("/api/call-openai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(APIBody)
        })
            .then((data) => data.json())
            .then((data) => {
                //console.log(data);

                const updatedData = [...recipes, JSON.parse(data)];
                updateRecipes(updatedData);
                localStorage.setItem('recipes', JSON.stringify(updatedData));
                //console.log(JSON.parse(localStorage.getItem("recipes")));
            })
            .catch((error) => {
                console.error(error);
            });
    }


    return (
        <>
            {/* <div>
            <textarea id="inp" onChange={(e) => setIng(e.target.value)}>
            </textarea>
        </div> */}



            <div className="fridge-container">
                <h1>Add to your fridge!</h1>
                <div>
                    <textarea
                        id='inp'
                        value={ing}
                        onChange={(e) => setIng(e.target.value)} />
                </div>
                <button onClick={handleAddIngredient}>Add Ingredient</button>
                <div>
                    {ingredients.map((ingredient, index) => (
                        <div className="fridge-ingredient-button" key={index}>
                            <span id="ingredient-label">{ingredient}</span>
                            <button onClick={() =>
                                handleRemoveIngredient(index)}>Remove</button>
                            <button onClick={() =>
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
                        <button onClick={handleClearSelectedIngredients}>Clear Selected Ingredients</button>
                        <div id="genBut">
                            <button onClick={callOpenAIApi}>Get recipe</button>
                        </div>
                    </div>
                </div>
            </div>




        </>
    )
}

export default TestAi
