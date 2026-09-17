import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API endpoint: Generate 20 Detective Questions using Gemini if available
  app.post('/api/generate-questions', async (req, res) => {
    try {
      const { title, passage } = req.body;
      if (!passage || typeof passage !== 'string') {
        res.status(400).json({ error: 'Passage text is required' });
        return;
      }

      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        res.status(503).json({ error: 'GEMINI_API_KEY not configured' });
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const prompt = `You are a curriculum expert for Gujarat Board & NCERT Standard 7 English.
Given the following textbook passage from chapter "${title || 'Std 7 Chapter'}":
"""
${passage.slice(0, 3500)}
"""
Generate exactly 20 high-quality multiple choice comprehension questions suitable for Std 7 students.
Each question must have:
- id: number (1 to 20)
- question: string
- options: array of 4 distinct strings
- correctIndex: integer (0 to 3)
- explanation: concise explanation of why the answer is correct
- clueSentence: sentence from passage where the answer is found
- category: one of 'factual', 'inference', 'vocabulary', 'grammar', 'theme'

Return strictly valid JSON matching this schema:
{
  "questions": [
    {
      "id": 1,
      "question": "...",
      "options": ["A", "B", "C", "D"],
      "correctIndex": 0,
      "explanation": "...",
      "clueSentence": "...",
      "category": "factual"
    }
  ]
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              questions: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    id: { type: Type.INTEGER },
                    question: { type: Type.STRING },
                    options: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                    },
                    correctIndex: { type: Type.INTEGER },
                    explanation: { type: Type.STRING },
                    clueSentence: { type: Type.STRING },
                    category: {
                      type: Type.STRING,
                      enum: ['factual', 'inference', 'vocabulary', 'grammar', 'theme'],
                    },
                  },
                  required: ['id', 'question', 'options', 'correctIndex', 'explanation', 'category'],
                },
              },
            },
            required: ['questions'],
          },
        },
      });

      if (response.text) {
        const parsed = JSON.parse(response.text);
        res.json(parsed);
        return;
      }

      res.status(500).json({ error: 'Failed to generate questions' });
    } catch (err: unknown) {
      console.error('Gemini question generation error:', err);
      res.status(500).json({ error: (err as Error).message || 'Server error' });
    }
  });

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', app: 'Reading Detective – Std 7 English' });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
