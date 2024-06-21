import { GoogleGenerativeAI } from "@google/generative-ai";

const AA="AIzaSyCsIm7LrgPyafVBFgM31pgXk7BmaCyy2_E"

export const API_KEY_GEMINI: string | undefined = process.env
  .NEXT_PUBLIC_GOOGLE_API_KEY as string;

export const genAI = new GoogleGenerativeAI(API_KEY_GEMINI);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



