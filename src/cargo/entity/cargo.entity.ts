import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne } from 'typeorm';
import { TipoCargo } from 'src/tipo_cargo/entity/tipo-cargo.entity';
import { UnidadOrganizacional } from 'src/unidad_organizacional/entity/unidad-organizacional.entity';
import { UnidadOrganizacionalModule } from '../../unidad_organizacional/unidad_organizacional.module';
import { Funcionario } from 'src/funcionario/entity';
import { cargo } from '../../enums/cargo.enum';
import { FuncionarioModule } from '../../funcionario/funcionario.module';

@Entity( {name:'cargo'})
export class Cargo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  descripcion: string;

  @Column()     // duda: float o double or number
  escala_Salarial: number;

  @Column()
  denominacion: string;

  @Column()
  fianza: boolean;

  @ManyToOne( ()=> UnidadOrganizacional, unidadOrganizacional => unidadOrganizacional.cargos)
  unidad_Organizacional: UnidadOrganizacional;

  @ManyToOne( ()=> TipoCargo, tipoCargo => tipoCargo.tipoCargos)
  tipoCargo: TipoCargo;

  @OneToOne( () => Funcionario, funcionario => funcionario.cargo)
  funcionario : Funcionario;



}
