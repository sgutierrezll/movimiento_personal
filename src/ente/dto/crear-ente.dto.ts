import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CrearEnteDto{

    @IsNotEmpty()
    @IsNumber()
    codigo_Ente: number // duda: string o number?

    @IsNotEmpty()
    @IsString()
    nombre: string

}