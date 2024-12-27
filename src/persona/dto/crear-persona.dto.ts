import { IsDate, IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CrearPersonaDto {
        @IsNotEmpty()
        @IsString()
        nombre : string
    
        @IsNotEmpty()
        @IsString()
        apellido_Paterno : string
    
        @IsNotEmpty()
        @IsString()
        apellido_Materno : string
    
        @IsNotEmpty()
        @IsString()
        documento : string
    
        @IsNotEmpty()
        @IsDate()
        fecha_Nacimiento : Date
    
        @IsNotEmpty()
        @IsNumber()
        telefono : number
}