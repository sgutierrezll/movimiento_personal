import { IsNotEmpty, IsNumber, IsString } from "class-validator"


export class CrearInmuebleDto{
        @IsNotEmpty()
        @IsNumber()
        id_Ente? : number 
    
        @IsNotEmpty()
        @IsString()
        nombre_Inmueble? : string
    
        @IsNotEmpty()
        @IsString()
        direccion? : string
        
        @IsNotEmpty()
        @IsNumber()
        codigo_Inmueble? : number
    
        @IsNotEmpty()
        @IsNumber()
        latitud? : number
    
        @IsNotEmpty()
        @IsNumber()
        longitud? : number
}