import { IsNumber, IsOptional, IsString } from "class-validator"

export class FiltroEnteDto{

    @IsOptional()
    @IsNumber()
    codigo_Ente? : number  // duda: string o number?
    
    @IsOptional()
    @IsString()
    nombre? : string

}