import { IsNumber, IsOptional, IsString, IsDate } from "class-validator";


export class ActualizarUusarioDto{

    @IsOptional()
    @IsNumber()
    id_Persona? : number
    
    @IsOptional()
    @IsString()
    password? : string

    @IsOptional()
    @IsString()
    rol? : string

    @IsOptional()
    @IsString()
    registro? : string

    @IsOptional()
    @IsDate()
    ultima_Sesion? : Date

}