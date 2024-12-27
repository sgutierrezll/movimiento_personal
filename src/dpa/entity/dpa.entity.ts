import { ColdObservable } from "rxjs/internal/testing/ColdObservable";
import { Column, Entity, In, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Departamento } from '../../enums/dpa.enum';
import { Inmueble } from "src/inmueble/entity";


@Entity({ name: 'dpa'})
export class Dpa{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    c_ut : string

    @Column()
    departamento : string

    @Column()
    provincia : string

    @Column()
    codigo_provincia: number
   v     
    @Column()
    municipio : string

    @Column()
    codigo_municipio : string   
0
    @Column()
    estado: boolean //duda : is it boolean, enum or string?

    @Column()
    _usuario_creacion: number; 
    
    @Column()
    _usuario_modificacion: number; 
    
    @Column()
    _fecha_creacion: Date;

    @OneToMany(() => Inmueble , inmueble => inmueble.dpa)
    inmuebles : Inmueble[] 
    







}