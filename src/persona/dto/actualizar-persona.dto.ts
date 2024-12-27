import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class ActualizarPersonaDto{

    @IsOptional()
    @IsString()
    nombre? : string

    @IsOptional()
    @IsString()
    apellido_Paterno? : string

    @IsOptional()
    @IsString()
    apellido_Materno? : string

    @IsOptional()
    @IsString()
    documento? : string

    @IsOptional()
    @IsDate()
    fecha_Nacimiento? : Date

    @IsOptional()
    @IsNumber()
    telefono? : number

}