import { IsOptional, IsString , IsNumber, IsBoolean} from "class-validator";


export class ActualizarMovimientoDto{

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
    @IsNumber()
    id_Funcionario? : number // es foreing key porsia

    @IsOptional()
    @IsString()
    memorandum? : string


}