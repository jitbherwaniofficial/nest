import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  ValidateNested,
  IsNotEmptyObject,
} from 'class-validator';
import { CreateAddressDto } from './createAddress.dto';
import { Type } from 'class-transformer';

export class CreateCustomerDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  @IsNumberString()
  id: number;
  @IsNotEmpty()
  name: string;

  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
