import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches, Max, MaxLength } from 'class-validator';

export class CreateTagDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'A slug should be all small latters and uses only "-" and without spaces. For example "my-url"',
  })
  @MaxLength(512)
  slug: string;
}
