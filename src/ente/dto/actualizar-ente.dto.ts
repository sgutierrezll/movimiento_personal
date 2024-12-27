import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class ActualizarEnteDto{

    @IsOptional()
    @IsNumber()
    codigo_Ente? : number //duda: string o number?

    @IsOptional()
    @IsString()
    nombre? : string

}