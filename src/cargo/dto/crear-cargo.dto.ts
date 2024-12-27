import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CrearCargoDto {

    @IsNotEmpty()
    @IsString()
    nombre: string

    @IsNotEmpty()
    @IsString()
    descripcion : string

    @IsNotEmpty()
    @IsNumber()
    escala_Salarial : number

    @IsNotEmpty()
    @IsString()
    id_TipoCargo : number  // es Foreign key porsia

    @IsNotEmpty()
    @IsString()
    denominacion : string

    @IsNotEmpty()
    @IsString()
    id_UnidadOrganizacional: number

    @IsNotEmpty()
    @IsBoolean()
    fianza: boolean

}