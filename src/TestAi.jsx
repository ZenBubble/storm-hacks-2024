import { useState, useEffect } from 'react';


function TestAi({recipes, updateRecipes}) {
    const [ing, setIng] = useState("")
    const [rec, setRec] = useState("")

    useEffect(() => {
        // Retrieve data from localStorage and parse it as an array
        const storedData = localStorage.getItem('myData');
        if (storedData) {
          updateRecipes(JSON.parse(storedData)); // Parse stored JSON string into an array
        }
      }, []);

    async function callOpenAIApi() {
        const APIBody = { ing };
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
            setRec(data);  

            const updatedData = [...recipes, JSON.parse(data)];
            updateRecipes(updatedData);
            localStorage.setItem('recipes', JSON.stringify(updatedData));
            console.log(JSON.parse(localStorage.getItem("recipes")));
        })
        .catch((error) => {
            console.error(error);
            setRec("Caught error, either data was not made or assigning errors");
        });
    }
    

    return (
        <>
        <div>
            <textarea onChange={(e) => setIng(e.target.value)}>
            </textarea>
        </div>
        <div>
            <button onClick={callOpenAIApi}>Get recipe</button>
        </div>
        </>
    )
  }
  
  export default TestAi
