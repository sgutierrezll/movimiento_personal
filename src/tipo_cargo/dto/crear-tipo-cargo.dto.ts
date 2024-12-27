import { IsNotEmpty, IsString } from "class-validator";

export class CrearTipoCargoDto {
    @IsNotEmpty()
    @IsString()
    nombre: string
}