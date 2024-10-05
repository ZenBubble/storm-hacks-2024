import { useState } from 'react';

function TestAi() {
    const [ing, setIng] = useState("")
    const [rec, setRec] = useState("")

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
            console.log(data);
            setRec(data);
        })
        .catch((error) => {
            console.error(error);
            setRec("Oops! Something went wrong 😅");
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
            <h3>Recipe: {rec}</h3>
            :
            null
            }
        </div>
        </>
    )

    
  }
  
  export default TestAi
