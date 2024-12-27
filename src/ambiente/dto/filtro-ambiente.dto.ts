
import { IsNotEmpty, IsOptional, IsString, IsNumber } from "class-validator";

export class FiltroAmbiente {

        @IsOptional()
        @IsNotEmpty()
        idUnidadOrganizacional? :number // es una Foreign Key porsia
    
        @IsOptional()
        @IsString()
        nivel? : string
    
        @IsOptional()
        @IsNumber()
        codigo_Ambiente? : string
    
        @IsOptional()
        @IsString()
        descripcion? : string
} 