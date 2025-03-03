import { POST_SKUNKOAI } from "./api.js";

console.log("Importing from 'api.js'...");

export const postAI = async (prompt, maxTokens, model = "default") => {
    console.log("postAI sent to POST_SKUNKOAI function");

    try {
        // Await the result and log it
        const response = await POST_SKUNKOAI(prompt, maxTokens, model);
        console.log("AI Response:", response);
    } catch (error) {
        console.error("Error in postAI:", error);
    }
};
