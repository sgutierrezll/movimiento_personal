    import { IsOptional, IsString, IsBoolean, IsNumber } from "class-validator";

export class FiltroCargoDto{

    @IsOptional()
    @IsString()
    nombre? : string

    @IsOptional()
    @IsString()
    descripcion? : string

    @IsOptional()
    @IsNumber()
    escala_Salarial? : number

    @IsOptional()
    @IsString()
    id_TipoCargo? : number  // es Foreign key porsia

    @IsOptional()
    @IsString()
    denominacion? : string

    @IsOptional()
    @IsString()
    id_UnidadOrganizacional? : number

    @IsOptional()
    @IsBoolean()
    fianza?: boolean
}