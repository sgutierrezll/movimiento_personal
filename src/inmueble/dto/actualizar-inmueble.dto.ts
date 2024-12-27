import { IsNumber, IsOptional, isString, IsString } from "class-validator";

export class ActualizarInmuebleDto{

    @IsOptional()
    @IsNumber()
    id_Ente? : number  //es foreign key porsia

    @IsOptional()
    @IsString()
    nombre_Inmueble? : string

    @IsOptional()
    @IsString()
    direccion? : string
    
    @IsOptional()
    @IsNumber()
    codigo_Inmueble? : number

    @IsOptional()
    @IsNumber()
    latitud? : number

    @IsOptional()
    @IsNumber()
    longitud? : number





}