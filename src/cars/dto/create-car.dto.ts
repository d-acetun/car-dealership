import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  @IsString()
  readonly brand: string;

  @IsString({ message: 'model must be a cool string' })
  @MinLength(3)
  readonly model: string;
}
