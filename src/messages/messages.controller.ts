import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'get all your messages here'

   }
  
  @Post()
  postMessages() {
    return 'post your messages here'
   }
  
  @Get('/:id')
  getMessages() {
    return 'hello'
  }
}
