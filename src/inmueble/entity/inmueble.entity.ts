import { Dpa } from "src/dpa/entity";
import { Ente } from "src/ente/entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name : 'inmueble'})
export class Inmueble {

    @PrimaryGeneratedColumn()
    id : number

    @Column()
    nombre_Inmueblre : string 

    @Column()
    direccion : string

    @Column()
    codigo_Inmueble: string

    @Column()
    latitud: number

    @Column()
    longitud: number

    @ManyToOne(() => Ente, ente => ente.inmuebles)
    ente: Ente;

    @ManyToOne( () => Dpa, dpa => dpa.inmuebles)
    dpa : Dpa;
    

}