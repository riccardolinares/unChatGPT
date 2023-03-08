import { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const model = process.env.OPENAI_MODEL || "gpt-3.5-turbo";
  const max_tokens = parseInt(process.env.OPENAI_MAX_TOKENS || "257");
  const prompt = req.body.text;

  let completion = null;

  if (model === "gpt-3.5-turbo") {
    completion = await openai.createChatCompletion({
      model: model,
      messages: [{ role: "system", content: prompt }],
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: max_tokens,
    });
    console.log(completion.data);

    console.log({
      value: req.body.text?.replace(/\n/g, "\\n"),
      completion: completion.data.choices[0].message?.content?.replace(
        /\n/g,
        "\\n"
      ),
    });
    res.status(200).json({ result: completion.data });
  } else {
    completion = await openai.createCompletion({
      model: model,
      prompt: prompt,
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: max_tokens,
    });
    console.log(completion.data);

    console.log({
      value: req.body.text?.replace(/\n/g, "\\n"),
      completion: completion.data.choices[0].text?.replace(/\n/g, "\\n"),
    });
    res.status(200).json({ result: completion.data });
  }
}
