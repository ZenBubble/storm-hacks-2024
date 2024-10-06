// server.js
import express from 'express';
import OpenAI from 'openai';
import dotenv from 'dotenv'

dotenv.config({override: true})
console.log(process.env)


const app = express();
const PORT = 5000;

const API_KEY = process.env.OPENAI_API_KEY;

const client = new OpenAI({
    apiKey: API_KEY, // This is the default and can be omitted
  });

app.use(express.json());

app.post('/api/call-openai', async (req, res) => {
    const { ing } = req.body;

    /*const APIBody = {
        model: "gpt-4o-mini",
        prompt: "What can I cook with " + ing,
        temperature: 0.7
    };*/

    try {
        const chatCompletion = await client.chat.completions.create({
            messages: [
                {
                    role:"system",
                    content:[{
                        type: "text",
                        text: "You are a robot chef helping out to create a recipe for a mother with a given set of ingredients. Assume that they have basic ingredients like flour and sugar. Please only return one recipe and try to keep it brief." +
                        'return it formatted like this:' +
                        '{"name": "sample name", "ingredients": "sample ingredients", "steps": "sample steps"}' +
                        'always respond with only the object formatted properly, and never output anything else'
                      }]
                },
                {role: 'user', 
                content: "Here are the ingredients: " + ing, }],
            model: "gpt-4o-mini",
            //response_format: { "type": "json_object" }
        });

        /*const response = await fetch("https://api.openai.com/v1/chat/completion", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${API_KEY}`
            },
            body: JSON.stringify(APIBody)
        });*/

        //const data = await response.json();
        res.json(chatCompletion.choices[0].message.content);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong!" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
