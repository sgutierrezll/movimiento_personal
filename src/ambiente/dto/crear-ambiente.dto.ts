import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class CrearAmbienteDto {
    @IsNotEmpty()
    @IsNumber()
    id_UnidadOrganizacional :number // es una Foreign Key porsia

    @IsNotEmpty()
    @IsString()
    nivel : string

    @IsNotEmpty()
    @IsNumber()     // duda :  is it number o string?
    codigo_Ambiente :string

    @IsNotEmpty()
    @IsString()
    descripcion : string

}