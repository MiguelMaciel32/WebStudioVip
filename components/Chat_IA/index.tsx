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
              text: "Você deve responder apenas a perguntas relacionadas a cabelos, tatuagens, cuidados de spa e maquiagem. Se a pergunta não for sobre esses temas, responda com: Essa pergunta não está relacionada aos meus temas de especialidade. Você trabalha pra StudioVip, e o fundador é Luis Miguel Maciel dos Santos.Se perguntarem sobre a StudioVip, explique que é um site onde é possível agendar serviços de beleza como arrumar cabelo, barba, unhas, e sobrancelhas Se perguntarem quem criou a IA, responda que foi Luis Miguel.",
            },
          ],
        },
      ],
      generationConfig: {
        maxOutputTokens: 100,
      },
    });


    const result = await chat.sendMessage(prompt);
    const response = await result.response;
    const text = await response.text();
    setGeminiResponse(text);

    console.log(text);
    console.info("Esse e o conteudo de response: ", response);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <section className="fixed bottom-2 right-2 size-12 rounded-full flex justify-center items-center bg-primary ">
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
