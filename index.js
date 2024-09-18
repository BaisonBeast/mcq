const express = require("express");
require('dotenv').config();

const { GoogleGenerativeAI } = require("@google/generative-ai");
const PROMPT_TOKEN = process.env.PROMPT_TOKEN;
const app = express();
const PORT = process.env.PORT || 5000;
const genAI = new GoogleGenerativeAI(PROMPT_TOKEN);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.get("/api/mcqs", async (req, res) => {
    const prompt = 'Give me 5 yes or no questions like array of objects where each object should have question and answer';
    const result = await model.generateContent(prompt);

    const jsonString = result.response.text();
    const data = jsonString.replace(/```json|```/g, '').trim();
    const arrayOfObjects = JSON.parse(data);

    res.json(arrayOfObjects);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
