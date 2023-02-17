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
  const completion = await openai.createCompletion({
    model: process.env.OPENAI_MODEL || "text-davinci-003",
    prompt: req.body.text,
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: parseInt(process.env.OPENAI_MAX_TOKENS || "100"),
  });

  console.log(completion.data);

  console.log({
    value: req.body.text?.replace(/\n/g, "\\n"),
    completion: completion.data.choices[0].text?.replace(/\n/g, "\\n"),
  });

  res.status(200).json({ result: completion.data });
}
