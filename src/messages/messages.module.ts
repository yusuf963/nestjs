import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { TestingController } from './testing.controller';


@Module({
  controllers: [MessagesController]
})
export class MessagesModule {}
