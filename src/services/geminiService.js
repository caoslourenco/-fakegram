import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from 'dotenv';

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export const generateCaptionWithTheme = async (imageUrl, theme) => {
  try {
    const prompt = `Generate a caption for the image: ${imageUrl} with theme: ${theme}`;
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    throw new Error('Error generating caption with Gemini AI');
  }
};
