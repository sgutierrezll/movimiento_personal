import { IsNumber, IsOptional, IsString } from "class-validator";


export class ActualizarUnidadOrganizacionalDto {

    @IsOptional()
    @IsString()
    codigo_Unidad_Org?: string

    @IsOptional()
    @IsString()
    nombre?: string

    @IsOptional()
    @IsNumber()
    id_Ente?: number // is foreign key 

}