import React, { useState } from 'react';
import './styles.css'
import './results.css'

import TestAi from './TestAi.jsx'
import DisplayRecipes from './DisplayRecipes.jsx'

function MainPage() {
    const [recipes, setRecipes] = useState([]);
    const [select, setSelect] = useState({});
    const updateRecipes = (newRecipes) => {setRecipes(newRecipes)}
    const updateSelected = (recipe) => {setSelect(recipe)}
    

    return (
        <>
        <div>
    <div id="titlescreen">
      <img src="title.webp" alt="Taste BUDdies Logo" id="title-logo" />
      <span id="title-text">Ai Chef</span>

      <div class="small-photos">
        <img src="pot.webp" alt="pot" class="small-photo" />
        <img src="robot.webp" alt="robot" class="small-photo" />
        <img src="pot.webp" alt="pot" class="small-photo" />
        <img src="robot.webp" alt="robot" class="small-photo" />
        <img src="pot.webp" alt="pot" class="small-photo" />
        <img src="robot.webp" alt="robot" class="small-photo" />
        <img src="pot.webp" alt="pot" class="small-photo" />
        <img src="robot.webp" alt="robot" class="small-photo" />
        <img src="pot.webp" alt="pot" class="small-photo" />
        <img src="robot.webp" alt="robot" class="small-photo" />
        <img src="pot.webp" alt="pot" class="small-photo" />
        <img src="robot.webp" alt="robot" class="small-photo" />
        <img src="pot.webp" alt="pot" class="small-photo" />
      </div>
    </div>

    <div id="space"></div>

    <div class="container">
      <div id="textarea-container">
        <div id="textarea">
        <TestAi updateRecipes={updateRecipes} recipes={recipes}/>
        </div>
        <div class="delete-buttons">
        <DisplayRecipes recipeData={recipes} updateSelected={updateSelected} select={select}/>
        </div>
        <div class="button-group">
          {/* <button class="save-btn">Save</button>
          <button class="generate-btn">Generate</button> */}
        </div>
      </div>

      <div class="boxes">
      {select && (
                <div className="result-container">
                    <h3 className="result-header">Ingredients:</h3>
                    <p className="result-txt">{select.ingredients}</p>
                    <h3 className="result-header">Recipe:</h3>
                    <p className="result-txt">{select.steps}</p>
                </div>
            )}
        {/* <div class="row noMargin">
          <div class="box one">food 1</div>
          <div class="box two">food 2</div>
        </div>
        <div class="row noMargin">
          <div class="box three">food 3</div>
          <div class="box four">food 4</div>
        </div> */}
      </div>
    </div>

  </div>
        </>
    )
}

export default MainPage
