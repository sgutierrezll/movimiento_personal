import { IsOptional, IsNumber, IsString, IsBoolean } from "class-validator"


export class FiltroFuncionarioDto{
     @IsOptional()
    @IsNumber()
    id_Persona? : number //es foreign key ojooo


    @IsOptional()
    @IsString()
    modalidad? : string

    @IsOptional()
    @IsNumber()
    id_Cargo? : number

    @IsOptional()
    @IsString()
    fecha_Incorporacion? : string
    
    @IsOptional()
    @IsString()
    fecha_Baja? : string

    @IsOptional()
    @IsBoolean()
    fianza? : boolean

}