import { IsString, Length, IsEmail } from "class-validator"

// ! available method to validate post request body 
// validate,
// validateOrReject,
// Contains,
// IsInt,
// Length,
// IsEmail,
// IsFQDN,
// IsDate,
// Min,
// Max,
export class CreateMessagesDto {
  @IsString()
  // @Length(10, 20)
  // @IsEmail()
  content: string
  age: number
  isAdmin: boolean
}