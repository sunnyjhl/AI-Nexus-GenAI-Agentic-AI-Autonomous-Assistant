# AI Nexus: GenAI + Agentic AI Autonomous Assistant

## Overview

Intelligent AI assistant combining Generative AI and Agentic AI. Features chat UI, autonomous task breaking, tool usage (weather, calculator, search), OpenAI integration, MongoDB memory.

## Tech Stack

- **Frontend**: React + Tailwind CSS
- **Backend**: Node.js + Express + MongoDB + OpenAI
- **Database**: MongoDB

## Quick Start

1. **Clone/Setup**:

   ```
   # Already in project dir
   ```

2. **Backend**:

   ```
   cd backend
   npm install
   cp .env.example .env  # Add your keys
   npm run dev
   ```

   Backend runs on `http://localhost:5000`

3. **Frontend**:

   ```
   cd ../frontend
   npm install
   npm start
   ```

   Frontend runs on `http://localhost:3000`

4. **Environment Variables** (backend/.env):

   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/ainexus  # or Atlas
   OPENAI_API_KEY=sk-...  # Optional, mocks if missing
   ```

5. **Test**:
   - Open browser to `http://localhost:3000`
   - Chat: \"What's the weather in NYC and tip for $50?\"
   - See agentic response with tools!

## Architecture

- **AgentService**: Parses input → Tasks → Tool selection → Execution → Synthesis
- **Tools**: Modular (calculator, weather mock, search mock)
- **Memory**: MongoDB stores conversations
- **API**: POST /api/chat

## Features Demo

- GenAI: Text gen, summary
- Agentic: Autonomous tool calling
- Responsive ChatGPT-like UI

## Troubleshooting

- MongoDB: Install/run local MongoDB
- No OpenAI key: Uses mock responses
- CORS: Enabled for localhost:3000

Built for placement interviews - modular, documented, runnable!
