import { IsOptional, IsString, IsNumber } from "class-validator"

export class FiltroPersonaDto {
    
    @IsOptional()
    @IsString()
    nombre? : string

    @IsOptional()
    @IsString()
    apellidoPaterno? : string

    @IsOptional()
    @IsString()
    apellidoMaterno? : string

    @IsOptional()
    @IsString()
    documento? : string

    @IsOptional()
    @IsString()
    fechaNacimiento? : string

    @IsOptional()
    @IsNumber()
    telefono? : number
}