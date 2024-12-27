import { IsNotEmpty, IsNumber, IsEnum, IsIn, IsDate, IsString} from "class-validator";
// import { departamento } from "src/enums/dpa.enum";


export class CrearDpaDto {

    
    @IsNotEmpty()
    @IsNumber()
    c_ut : number

    @IsNotEmpty()
    @IsString()
    departamento: string; // duda: is it well defined?'

    @IsNotEmpty()
    @IsString()
    provincia: string  // duda: is it well defined?'

    @IsNotEmpty()
    @IsNumber()
    codigo_provincia: number

    @IsNotEmpty()
    @IsString()
    municipio: string //

    @IsNotEmpty()
    @IsNumber()
    codigo_municipio : number
    
    @IsNotEmpty()
    @IsIn(['ACTIVO','INACTIVO']) //duda : it could be enum, boolean? 
    estado: string

    @IsNotEmpty()
    @IsNumber()
    _usuario_creacion: number; 
  
    @IsNotEmpty()
    @IsNumber()
    _usuario_modificacion: number; 
  
    @IsNotEmpty()
    @IsDate()
    _fecha_creacion: Date;

}