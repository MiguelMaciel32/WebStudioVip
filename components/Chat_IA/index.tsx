"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Bot, Image, Send } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { model } from "@/utils/GeminiUtils";
import { useState } from "react";

export default function ChatIA() {
  const [userPromptValue, setUserPromptValue] = useState("");
  const [geminiResponse, setGeminiResponse] = useState("");

  const run = async (userPrompt: string) => {
    const prompt = userPrompt;

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: prompt }],
        },
        {
          role: "model",
          parts: [
            {
              text: "Voce deve sempre falar em pt-br. Seu desenvolvedor e o studioVip! Voce foi criado para ajudar pessoas com as melhores soluçoes possiveis para problemas de cabelo, ou tirar duvidas no nosso site como uma genIA (https://tcc-studio-vip.vercel.app/)",
            },
          ],
        },
      ],
      generationConfig: {
        maxOutputTokens: 100,
      },
    });

    //const result = await model.generateContent(prompt);
    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = response.text();
    setGeminiResponse(text);


    console.log(text);
    console.info("Esse e o conteudo de respo9nse: ", response);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <section className="fixed bottom-2 right-2 size-12 rounded-full flex justify-center items-center bg-white ">
          <Bot size={32} className="text-primary-foreground" />
        </section>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>MACIEL I.A</SheetTitle>
          <SheetDescription>
            é uma inteligência artificial especializada em beleza capilar.
          </SheetDescription>
        </SheetHeader>
        <Separator className="my-4" />
        <section className="h-max flex flex-col">
          <section className="flex-1 h-full space-y-4">
            <section>
              <h1>{userPromptValue}</h1>
            </section>

            <section>
              <h2>{geminiResponse}</h2>
            </section>
          </section>
          <section className="flex flex-row flex-nowrap gap-4 fixed bottom-4 items-center">
            <Textarea
              onChange={(e) => setUserPromptValue(e.target.value)}
              placeholder="Digite sua duvida..."
              className="text-wrap col-span-1"
            />
            <Button variant={"outline"}>
              <Image />
            </Button>
            <Button
              onClick={() => {
                run(userPromptValue);
              }}
              className="mr-2"
            >
              <Send />
            </Button>
          </section>
        </section>
      </SheetContent>
    </Sheet>
  );
}
