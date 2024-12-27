import { IsNotEmpty, IsNumber, IsString, IsDate} from "class-validator"

export class CrearUsuario {

        @IsNotEmpty()
        @IsNumber()
        id_Persona? : number
        
        @IsNotEmpty()
        @IsString()
        password? : string
    
        @IsNotEmpty()
        @IsString()
        rol? : string
    
        @IsNotEmpty()
        @IsString()
        registro? : string
    
        @IsNotEmpty()
        @IsDate()
        ultima_Sesion? : Date
        
}