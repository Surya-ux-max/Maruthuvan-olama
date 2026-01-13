import { Injectable } from '@nestjs/common';
import { OLLAMA_CONFIG } from '../config/ollama.config';
import { MARUTHUVAN_PROMPT } from '../common/prompts/maruthuvan.prompt';

@Injectable()
export class ChatService {
  async chat(message: string): Promise<string> {
    const response = await fetch(`${OLLAMA_CONFIG.url}/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: OLLAMA_CONFIG.model,
        prompt: `${MARUTHUVAN_PROMPT}\nUser: ${message}`,
        stream: false,
      }),
    });

    const data = await response.json();
    return data.response;
  }
}
