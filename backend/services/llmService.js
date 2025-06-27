// services/llmService.js
const { ChatOpenAI } = require("@langchain/openai");
const { HumanMessage, SystemMessage, AIMessage } = require("@langchain/core/messages");
const dotenv = require("dotenv");

dotenv.config({ path: "../.env" });

const apiKey = process.env.API_KEY;
const chat = new ChatOpenAI({
  openAIApiKey: apiKey,
  modelName: "gpt-4",
});

async function invokeLLM(promptContent, systemContent, previousChat) {
  const messages = [
    new HumanMessage(promptContent),
    new SystemMessage(systemContent),
    new AIMessage(previousChat),
  ];

  try {
    const response = await chat.invoke(messages);
    console.log(response.content);
    return response.content;
  } catch (error) {
    console.error("Error:", error);
    return `An error occurred while processing the request: ${error}`;
  }
}

module.exports = { callGPT: invokeLLM };
