import { IsDate, IsEnum, IsIn, isIn, IsNumber, IsOptional, IsString } from "class-validator";
// import { departamento } from "src/enums/dpa.enum";


export class ActualizarDpaDto{

    @IsOptional()
    @IsNumber()
    c_ut : number

    @IsOptional()
    @IsString()
    departamento: string; // duda: is it well defined?'

    @IsOptional()
    @IsString()
    provincia: string   // duda: is it well defined?'

    @IsOptional()
    @IsNumber()
    codigo_provincia: number

    @IsOptional()
    @IsString()
    municipio: string //

    @IsOptional()
    @IsNumber()
    codigo_municipio : number
    
    @IsOptional()
    @IsIn(['ACTIVO','INACTIVO']) //duda : it could be enum, boolean? 
    estado: string

    @IsOptional()
    @IsNumber()
    _usuario_creacion: number; 
  
    @IsOptional()
    @IsNumber()
    _usuario_modificacion: number; 
  
    @IsOptional()
    @IsDate()
    _fecha_creacion: Date;




    

    



}