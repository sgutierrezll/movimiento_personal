 

import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class ActualizarAmbienteDto{
    @IsOptional()
    @IsNotEmpty()
    id_UnidadOrganizacional:number

    @IsOptional()
    @IsString()
    nivel? : string
    
    @IsOptional()
    @IsString()
    codigo_Ambiente? : string

    @IsString()
    descripcion? : string
}