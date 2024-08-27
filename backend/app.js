import Groq from "groq-sdk";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config()

const app = express();
app.use(cors());
app.use(express.json());


const PORT = 3000;

let ans = "";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

async function main(question) {
  const chatCompletion = await getGroqChatCompletion(question);
  // Print the completion returned by the LLM.
  // console.log(chatCompletion.choices[0]?.message?.content || "");
  ans = chatCompletion.choices[0]?.message?.content || "";
}

async function getGroqChatCompletion(question) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: question,
      },
    ],
    model: "llama3-8b-8192",
  });
}

app.post("/askQuestion", (req, res) => {
  main(req.body.question)
    .then(() => {
      res.json({answer : ans});
    })
    .catch((err) => {
      console.log(err);
  });
});

app.listen(PORT, () => {
  console.log(`listining in port : ${PORT}`);
});
