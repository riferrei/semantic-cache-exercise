# Chatbot Learning Application

## Overview

This project is a full-stack web application built with Node.js. It serves as a learning tool for developers who want to get hands-on experience with Node.js, leveraging the OpenAI API to create an intelligent chatbot. You are going to add code to this project to include support for semantic caching, using Redis as the persistent store.

![Redis](images/redis_logo.png)

## Features

- **Interactive Chatbot**: Engage with a chatbot to learn more about virtually anything.
- **Node.js Backend**: A robust backend powered by Node.js, utilizing LangChain for processing and generating responses using the OpenAI API.
- **React Frontend**: A user-friendly and responsive frontend built with HTML/JS, providing an intuitive interface to interact with the chatbot.

## Demo

Here’s a quick demo of how the project works:

### Image Example

![Demo](./images/demo.png)

This project doesn't contain support for semantic caching. This means, the chat is unable to retrieve previous already answered questions. You are going to add code to this project to include support for semantic caching, using Redis as the persistent store. The behavior you want to achieve is that the chatbot will reuse previous messages in the chat session, whether if the user asks the same question with the exact words or with different words, as long as the meaning is the same.

## What is Semantic Caching?

Semantic caching is an advanced caching mechanism that stores not only query results but also their semantic meaning and context. Unlike traditional caching that uses exact string matching to identify cache hits, semantic caching understands the logical meaning of queries, allowing it to recognize when a new query can be fully or partially answered using previously cached results. This approach enables the system to decompose incoming queries into a "cached portion" that can be retrieved directly from the cache and a "remainder query" that must be sent to the data source, resulting in more efficient data retrieval. This is possible because queries are stored in the database as embeddings, and because of this, developers and apply similarity search with them.

Applications implement semantic caching to achieve significant performance improvements and resource optimization. By reducing redundant queries to databases or remote services like LLMs, semantic caching decreases response times, network traffic, and server load. Additionally, semantic caching can enhance user experience by providing faster responses to semantically similar questions even when they're phrased differently, making it especially beneficial for search engines, recommendation systems, and natural language processing applications that handle variations of similar queries.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/riferrei/semantic-cache-exercise.git
cd semantic-cache-exercise
```

2. Install dependencies:

```bash
cd backend
npm install
```

3. Obtain OpenAI API Key:

Sign up for an account at OpenAI.
Get your API key from the OpenAI dashboard.
Create a .env file in the root directory and add your API key:

```dotenv
API_KEY="YOUR KEY HERE"
```

You may need to change the model in the backend/services/llmService.js file depending on availability
```javascript
const chat = new ChatOpenAI({
    openAIApiKey: apiKey,
    modelName: "gpt-4",
});
```

## Usage

Run the following command to start the chat bot server from the backend:
```bash
cd backend
npm start
```

And the index.html file should open in your browser

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
