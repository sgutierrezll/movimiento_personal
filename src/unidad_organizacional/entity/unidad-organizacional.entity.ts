import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Ente } from 'src/ente/entity/ente.entity';
import { Ambiente } from 'src/ambiente/entity';
import { Cargo } from 'src/cargo/entity/cargo.entity';


@Entity({ name:'unidad_organizacional'})
export class UnidadOrganizacional {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codUnidOrg: string;

  @Column()
  nombre: string;

  @OneToMany(() => Ambiente, ambiente => ambiente.unidadOrganizacional)
  ambientes: Ambiente[];

  @OneToMany(()=> Cargo, cargo => cargo.unidad_Organizacional)
  cargos: Cargo[];


  @ManyToOne( ()=> Ente, ente => ente.unidadOrganizacionales)
  ente : Ente;

}
