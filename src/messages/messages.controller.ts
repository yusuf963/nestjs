import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import {createMessages} from './dtos/create-messages.dto'
@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'get all your messages here'

   }
  
  @Post()
  createMessages(@Body() body: createMessages) {
    console.log(body)
   }
  
  @Get('/:id')
  getMessages(@Param('id') id: string) {
    console.log(id)
    return 'hey I am one message'
  }
}
