import { generateAIResponse } from "https://sp-api.netlify.app/skunkoai.js";

console.log("Imported to api.js");
console.log("Importing from 'sp-api.netlify.app/skunkoai.js'...");

export async function POST_SKUNKOAI(prompt, maxTokens, model = "default") {
    console.log("POST_SKUNKOAI function sent to generateAIResponse function.");
    
    // Return the result of generateAIResponse
    return await generateAIResponse(prompt, maxTokens, model);
}
