import { Type } from 'class-transformer';
import {
  IsArray,
  IsNotEmpty,
  IsPositive,
  Length,
  ValidateNested,
} from 'class-validator';

export class CreateProdut {
  @IsNotEmpty()
  nome: string;

  @IsPositive()
  valor: number;

  @IsPositive()
  quantidadeDisponivel: number;

  @IsNotEmpty()
  @Length(1, 100)
  descricao: string;

  @IsNotEmpty()
  categoria: string;

  @ValidateNested()
  @IsArray()
  @Type(() => Characteristics)
  caracteristicas: Characteristics[];

  @ValidateNested()
  @IsArray()
  @Type(() => Imagens)
  imagens: Imagens[];
}

class Characteristics {
  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @Length(1, 100)
  descricao: string;
}

class Imagens {
  @IsNotEmpty()
  url: string;

  @IsNotEmpty()
  @Length(1, 100)
  descricao: string;
}
