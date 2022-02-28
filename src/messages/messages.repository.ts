import { readFile, writeFile } from 'fs/promises';
import { json } from 'stream/consumers';

export class MessageRepository {
  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages
  }
  async findOne(id: string) {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages[id]
  }
  async create(message: string) {
    const contents = await readFile('messages.json', 'utf-8');
    const messages = JSON.parse(contents);
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, message };
    await writeFile('messages.json', JSON.stringify(messages))
    return messages
  }
}