import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  MinDate,
} from 'class-validator';

export class CreateItemDto {
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  item: string;

  @IsBoolean()
  @IsNotEmpty()
  checked: boolean;

  @IsDate()
  @Transform(({ value }) => new Date(value))
  @MinDate(new Date())
  @IsNotEmpty()
  createdAt: Date;
}
