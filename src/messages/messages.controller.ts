import { Controller, Get, Post, Param, Body, NotFoundException } from '@nestjs/common';
import { CreateMessagesDto } from './dtos/create-messages.dto';
import { MessagesService } from './messages.service'

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) { }
  @Get()
  listMessages() {
    return this.messagesService.findAll()
  }

  @Get('/:id')
  async getMessages(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id)
    if (!message) {
      // NotFoundException is build in nest nice method in side the common library
      throw new NotFoundException('message not found')
    }
    return message
  }

  @Post()
  createMessages(@Body() body: CreateMessagesDto) {
    return this.messagesService.postMessage(body.content)
  }
}
