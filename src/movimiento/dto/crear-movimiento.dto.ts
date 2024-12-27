import { IsOptional, IsString, IsNumber, IsBoolean, IsNotEmpty } from "class-validator"


export class CrearMovimiento {

    @IsNotEmpty()
    @IsString()
    modalidad : string

    @IsNotEmpty()    
    @IsNumber()
    nro_Documento : number

    @IsOptional()
    @IsString()
    tipo_Movimiento : string

    @IsNotEmpty()
    @IsBoolean()
    estado : boolean

    @IsNotEmpty()
    @IsString()
    fecha_aprobacion : string

    @IsNotEmpty()
    @IsNumber()
    idFuncionario : number // es foreing key porsia

    @IsNotEmpty()
    @IsString()
    memorandum : string

}