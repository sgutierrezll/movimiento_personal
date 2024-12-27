import { IsOptional, IsNumber, IsString } from "class-validator"


export class FiltroInmuebleDto {

    @IsOptional()
    @IsNumber()
    idEnte? : number 

    @IsOptional()
    @IsString()
    nombreInmueble? : string

    @IsOptional()
    @IsString()
    direccion? : string
    
    @IsOptional()
    @IsNumber()
    codInmueble? : number

    @IsOptional()
    @IsNumber()
    latitud? : number

    @IsOptional()
    @IsNumber()
    longitud? : number

}