import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, } from 'typeorm';
import { UnidadOrganizacional } from '../../unidad_organizacional/entity/unidad-organizacional.entity';


@Entity({ name:'ambiente'})
export class Ambiente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nivel: string;

  @Column()
  codigo_Ambiente: string;

  @Column()
  descripcion: string;

  @ManyToOne( () => UnidadOrganizacional, unidadOrganizacional=> unidadOrganizacional.ambientes)
  unidadOrganizacional: UnidadOrganizacional;

}
