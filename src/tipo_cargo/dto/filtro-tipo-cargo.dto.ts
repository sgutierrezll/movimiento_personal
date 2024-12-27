import { IsOptional, IsString } from "class-validator";


export class FiltroTipoCargoDto{

    @IsOptional()
    @IsString()
    nombre? : string


}