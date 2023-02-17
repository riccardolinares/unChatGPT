import Head from "next/head";
import React, { useState, useCallback } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [usage, setUsage] = useState({ total_tokens: 0, tokens: 0 });
  const [chat, setChat] = useState([] as any);

  const handleInput = useCallback(
    (e: { target: { value: React.SetStateAction<string> } }) => {
      setValue(e.target.value);
    },
    []
  );

  const handleKeyDown = useCallback(
    async (e: { key: string }) => {
      if (e.key === "Enter") {
        setLoading(true);
        const oldChat =
          chat.map(
            (item: { value: string; completion: string }) =>
              item.value + " " + item.completion + " "
          ) || "";

        const oldChat2 = chat.at(-1)?.completion + " " || "";
        const response = await fetch("/api/openai", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: oldChat2 + value,
          }),
        }).then((res) => {
          setLoading(false);
          return res;
        });

        const data = await response.json();
        const completion = data.result.choices[0].text;
        setValue("");

        // Upgrade the total tokens used by the number of tokens used in this request.
        setUsage((usage) => ({
          total_tokens: usage.total_tokens + data.result.usage.total_tokens,
          tokens: data.result.usage.total_tokens,
        }));
        if (chat)
          setChat((chat: [{ value: string; completion: string }]) => [
            ...chat,
            { value, completion },
          ]);
        else setChat([{ value, completion }]);
        console.log("chat", chat);
      }
    },
    [value]
  );

  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="top bg-gray-50 py-5">
          <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto ">
            <div className="text-2xl font-bold text-gray-700">unChatGPT</div>
            <div className="text-sm font-medium text-gray-700">
              When the original ChatGPT is at capacity
            </div>
          </div>
          <div className="flex flex-row items-center justify-end h-auto px-10 inline-block align-middle">
            <div className="flex-1">
              <button
                onClick={() => setChat([])}
                className="bg-blue-500 hover:bg-blue-700 text-white font-md py-2 px-4 rounded-lg inline-flex items-center text-xs"
              >
                New chat
              </button>
            </div>
            <div className="text-sm text-blue-600 ">
              <p>
                <span className="font-bold">Usage:</span> {usage.total_tokens}{" "}
                tokens [ € {(usage.total_tokens * 0.02) / 1000}]
              </p>
            </div>
          </div>
        </div>
        {/* Map through the chat history and display the user's input and the bot's completion */}
        <div className="overflow-y-auto py-10 h-screen flex-1">
          {chat.map(
            (item: { value: string; completion: string }, index: number) => (
              <div key={`message-${index.toString()}`}>
                <div className="flex flex-col w-full space-y-2 py-3 px-32 border-b-2">
                  <div className="text-sm font-medium text-gray-700">You</div>
                  <div className="message-user text-gray-700 mx-10 whitespace-pre-wrap">
                    <p>{item.value.trim()}</p>
                  </div>
                </div>
                <div className="flex flex-col w-full space-y-2 py-3 px-32 border-b-2">
                  <div className="text-sm font-medium text-gray-700 ">Bot</div>
                  <div className="message-bot text-gray-500 mx-10 whitespace-pre-wrap">
                    <p>{item.completion.trim()}</p>
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto space-y-4 mt-5 mb-10 h-auto">
          <input
            value={isLoading ? "Loading... " : value}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            className={`${
              isLoading ? "bg-gray-100 text-gray-500" : "bg-white"
            } w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
            placeholder="Enter a prompt and press Enter to send"
            disabled={isLoading}
          />
        </div>
        <div className="text-sm text-center font-medium text-gray-400 mb-2">
          This is a demo of OpenAI's GPT-3 API. It's not affiliated with OpenAI
          in any way.
        </div>
      </div>
    </>
  );
}
