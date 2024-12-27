import { IsNumber, IsOptional, IsString } from "class-validator";


export class FiltroUnidadOrganizacionalDto{

       @IsOptional()
       @IsString()
       codUnidOrg? : string

       @IsOptional()
       @IsString()
       nombre? : string

       @IsOptional()
       @IsNumber()
       id_Ente? : number //is  foreign take into account



}