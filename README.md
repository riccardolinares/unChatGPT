<div align="center"><img src="https://github.com/riccardolinares/unChatGPT/blob/main/unChatGPT_screenshot.png?raw=true" width="50%"></div>

# unChatGPT

unChatGPT is a clone of ChatGPT is an open source natural language processing (NLP) tool developed by OpenAI. It provides a chatbot that can interact with users in a natural language conversation.

## Getting Started

### Install dependencies

To get started with unChatGPT, clone the repository and install the dependencies:

```bash git clone
cd unChatGPT
npm install
```

### Create an OpenAI API Key

unChatGPT uses the OpenAI API to generate responses. To use the OpenAI API, you must create an API key. To create an API key, follow the instructions on the [OpenAI website](https://platform.openai.com/account/api-keys).

### Environment Variables

Copy the `.env.sample` file to `.env`

```bash cp .env.sample .env

```

and add your OpenAI API key to the file:

```
OPENAI_API_KEY      (required)
OPENAI_MODEL        (optional, default: "text-davinci-003")
OPENAI_MAX_TOKENS   (optional, default: "257")
```

## Usage

To start the chatbot, run the following command:

`bash npm start `

The chatbot will start and you can begin interacting with it. To stop the chatbot, press Ctrl+C.

## Disclaimer

unChatGPT is not affiliated with OpenAI. unChatGPT is a clone of ChatGPT, which is an open source project developed by OpenAI. unChatGPT is not endorsed by OpenAI.
