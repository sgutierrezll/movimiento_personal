
import { Inmueble } from 'src/inmueble/entity';
import { UnidadOrganizacional } from "src/unidad_organizacional/entity/unidad-organizacional.entity";

import { Entity, PrimaryGeneratedColumn, Column , OneToMany} from 'typeorm';
import { UnidadOrganizacionalModule } from '../../unidad_organizacional/unidad_organizacional.module';


@Entity('ente')
export class Ente {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()   // duda: string o number?
  codigo_Ente: string;

  @Column()
  nombre: string;

  @OneToMany(() => UnidadOrganizacional, unidadOrganizacional => unidadOrganizacional.ente)
  unidadOrganizacionales : UnidadOrganizacional[];

  @OneToMany(() => Inmueble, inmueble => inmueble.ente) 
  inmuebles: Inmueble[];

}
