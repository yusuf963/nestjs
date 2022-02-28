import { IsString } from "class-validator"

export class createMessages{
  @IsString()
  content: string
}