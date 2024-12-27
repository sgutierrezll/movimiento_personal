import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";


export class FiltroUsuario {

    @IsOptional()
    @IsNumber()
    id_Persona : number

    @IsOptional()
    @IsString()
    password : string

    @IsOptional()
    @IsString()
    rol : string

    @IsOptional()
    @IsString()
    string : string

    @IsOptional()
    @IsDate()
    ultima_Sesion? : Date
    

    







}