import { IsNotEmpty, IsString } from "class-validator";


export class CrearUnidadOrganizacionalDto{

    @IsNotEmpty()
    @IsString()
    codigo_Uniddad_Org : string  //duda : is it well defined?
    
    @IsNotEmpty()
    @IsString()
    nombre : string

    @IsNotEmpty()
    @IsString()
    id_Ente : number // is foreign key take into account

}