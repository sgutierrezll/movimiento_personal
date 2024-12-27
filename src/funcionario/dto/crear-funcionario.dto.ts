import { IsBoolean, IsNotEmpty, IsNumber, IsString,} from "class-validator"


export class CrearFuncionarioDto{

    @IsNotEmpty()
    @IsNumber()
    id_Persona : number //es foreign key ojooo

    @IsNotEmpty()
    @IsString()
    modalidad : string

    @IsNotEmpty()
    @IsNumber()
    id_Cargo : number

    @IsNotEmpty()
    @IsString()
    fecha_Incorporacion : string
    
    @IsNotEmpty()
    @IsString()
    fecha_Baja : string

    @IsNotEmpty()
    @IsBoolean()
    fianza: boolean

}