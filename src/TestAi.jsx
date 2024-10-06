import { useState, useEffect } from 'react';


function TestAi() {
    const [ing, setIng] = useState("")
    const [rec, setRec] = useState("")
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // Retrieve data from localStorage and parse it as an array
        const storedData = localStorage.getItem('myData');
        if (storedData) {
          setRecipes(JSON.parse(storedData)); // Parse stored JSON string into an array
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
            setRecipes(updatedData);
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
            {rec !==""?
            <h3>{rec}</h3>
            :
            null
            }
        </div>
        </>
    )
  }
  
  export default TestAi
