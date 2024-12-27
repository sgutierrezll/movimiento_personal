import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class ActualizarFuncionarioDto{

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