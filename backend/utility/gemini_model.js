// node --version # Should be >= 18
// npm install @google/generative-ai

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";
import env from "dotenv";
env.config();

const MODEL_NAME = "gemini-1.0-pro";
const API_KEY = process.env.GOOGLE_API_KEY;

export async function getQuestions(pdfText) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    // const parts = [
    //     { text: "input: create three questions based on this paragraph.Newton's first law of motion states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force. This law is often referred to as the law of inertia and is fundamental to understanding the behavior of objects in motion." },
    //     { text: "output: [     \"What is Newton's first law of motion?\",    \"How does Newton's first law relate to inertia?\",     \"What happens to an object according to Newton's first law?\",   ]" },
    //     { text: "input: create three questions based on this paragraph.Mitochondria are organelles found in eukaryotic cells responsible for producing energy in the form of ATP (adenosine triphosphate) through cellular respiration. They contain their own DNA and are often referred to as the 'powerhouses' of the cell due to their role in energy production." },
    //     { text: "output: [      \"What are mitochondria?\",      \"What is the function of mitochondria in cells?\",      \"Why are mitochondria called the 'powerhouses' of the cell?\",   ]" },
    //     { text: `input: create three questions based on this paragraph.${pdfText}` },

    // ];

    // const result = await model.generateContent({
    //     contents: [{ role: "user", parts }],
    //     generationConfig,
    //     safetySettings,
    // });

    // const response = result.response;
    // let text = response.text()

    // node --version # Should be >= 18
    // npm install @google/generative-ai


    const chat = model.startChat({
        generationConfig,
        safetySettings,
        history: [
            {
                role: "user",
                parts: [{ text: "\"create three questions based on this paragraph.Newton's first law of motion states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force. This law is often referred to as the law of inertia and is fundamental to understanding the behavior of objects in motion.\"output: [     \"What is Newton's first law of motion?\",    \"How does Newton's first law relate to inertia?\",    \"What happens to an object according to Newton's first law?\",   ]\"input: create three questions based on this paragraph.Mitochondria are organelles found in eukaryotic cells responsible for producing energy in the form of ATP (adenosine triphosphate) through cellular respiration. They contain their own DNA and are often referred to as the 'powerhouses' of the cell due to their role in energy production.\"output:" }],
            },
            {
                role: "model",
                parts: [{ text: "{ \"questions\" : [\"What is the primary function of mitochondria?\" ,  \"Why are mitochondria referred to as the 'powerhouses' of the cell?\" ,\"What unique feature do mitochondria possess regarding their DNA?\" ]}" }],
            },
        ],
    });

    const result = await chat.sendMessage(`create three questions based on this paragraph only in above format ${pdfText}`);
    const response = result.response;

    let text = response.text();
    console.log(text);
    console.log(JSON.parse(text));


    return JSON.parse(text);
}

export async function getSummary(pdfText) {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
        temperature: 0.9,
        topK: 1,
        topP: 1,
        maxOutputTokens: 2048,
    };

    const safetySettings = [
        {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
        {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
        },
    ];

    // const parts = [
    //     { text: "input: create three questions based on this paragraph.Newton's first law of motion states that an object will remain at rest or in uniform motion in a straight line unless acted upon by an external force. This law is often referred to as the law of inertia and is fundamental to understanding the behavior of objects in motion." },
    //     { text: "output: [     \"What is Newton's first law of motion?\",    \"How does Newton's first law relate to inertia?\",     \"What happens to an object according to Newton's first law?\",   ]" },
    //     { text: "input: create three questions based on this paragraph.Mitochondria are organelles found in eukaryotic cells responsible for producing energy in the form of ATP (adenosine triphosphate) through cellular respiration. They contain their own DNA and are often referred to as the 'powerhouses' of the cell due to their role in energy production." },
    //     { text: "output: [      \"What are mitochondria?\",      \"What is the function of mitochondria in cells?\",      \"Why are mitochondria called the 'powerhouses' of the cell?\",   ]" },
    //     { text: `input: create three questions based on this paragraph.${pdfText}` },

    // ];

    // const result = await model.generateContent({
    //     contents: [{ role: "user", parts }],
    //     generationConfig,
    //     safetySettings,
    // });

    // const response = result.response;
    // let text = response.text()

    // node --version # Should be >= 18
    // npm install @google/generative-ai


    const chat = model.startChat({
        generationConfig,
        safetySettings,
    
    });

    const result = await chat.sendMessage(`give me little summary of ${pdfText}`);
    const response = result.response;

    let text = response.text();
    console.log(text);
    


    return text;

}