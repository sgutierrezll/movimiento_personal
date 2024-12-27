import { IsOptional, IsString, IsNumber, IsBoolean } from "class-validator"


export class FiltroMovimiento{

    @IsOptional()
    @IsString()
    modalidad? : string

    @IsOptional()
    @IsNumber()
    nro_Documento? : number

    @IsOptional()
    @IsString()
    tipo_Movimiento? : string

    @IsOptional()
    @IsBoolean()
    estado? : boolean

    @IsOptional()
    @IsString()
    fecha_aprobacion? : string

    @IsOptional()
  
    id_Funcionario? : number //es foreign key porsia 

    @IsOptional()
    @IsString()
    memorandum? : string

}