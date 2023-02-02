<div align="center"><img src="https://github.com/riccardolinares/unChatGPT/blob/main/unChatGPT_screenshot.png?raw=true" width="50%"></div>

# unChatGPT

unChatGPT is a powerful tool that uses the OpenAI API to create a chatbot-like chat experience. It allows users to converse with an AI-based chatbot, similar to ChatGPT, but without the need to wait in a queue or have limited access. unChatGPT is designed to provide an easy and efficient way to chat with an AI-based chatbot in a fast and intuitive way.

<a href="https://www.producthunt.com/posts/unchatgpt?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-unchatgpt" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=377698&theme=light" alt="unChatGPT - ChatGPT&#0032;is&#0032;at&#0032;capacity&#0063;&#0032;Use&#0032;the&#0032;OpenAI&#0032;API&#0032;with&#0032;unChatGPT | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>

## Getting Started

### Install dependencies

To get started with unChatGPT, clone the repository and install the dependencies:

```
git clone
cd unChatGPT
npm install
```

### Create an OpenAI API Key

unChatGPT uses the OpenAI API to generate responses. To use the OpenAI API, you must create an API key. To create an API key, follow the instructions on the [OpenAI website](https://platform.openai.com/account/api-keys).

### Environment Variables

Copy the `.env.sample` file to `.env`

```
cp .env.sample .env

```

and add your OpenAI API key to the file:

```
OPENAI_API_KEY      (required)
OPENAI_MODEL        (optional, default: "text-davinci-003")
OPENAI_MAX_TOKENS   (optional, default: "257")
```

## Usage

To start the chatbot, run the following command:

```
npm run build
npm run start
```

or if you want to use the development version:

```
npm run dev
```

The chatbot will start and you can begin interacting with it. To stop the chatbot, press Ctrl+C.

## Disclaimer

unChatGPT is not affiliated with OpenAI. unChatGPT is a clone of ChatGPT, which is an open source project developed by OpenAI. unChatGPT is not endorsed by OpenAI.
