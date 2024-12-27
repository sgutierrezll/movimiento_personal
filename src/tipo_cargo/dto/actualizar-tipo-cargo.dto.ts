import { IsOptional, IsString } from "class-validator";


export class ActualizarTipoCargoDto {

    @IsOptional()
    @IsString()
    nombre? : string


}