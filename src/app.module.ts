import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { PersonaModule } from './persona/persona.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { MovimientoModule } from './movimiento/movimiento.module';
import { CargoModule } from './cargo/cargo.module';
import { TipoCargoModule } from './tipo_cargo/tipo_cargo.module';
import { UnidadOrganizacionalModule } from './unidad_organizacional/unidad_organizacional.module';
import { AmbienteModule } from './ambiente/ambiente.module';
import { EnteModule } from './ente/ente.module';
import { InmuebleModule } from './inmueble/inmueble.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'moviliza',
      database: 'movimiento_personal',
      entities: [__dirname + '/**/*.entity.{js,ts}'], // Compatible con TS y JS
      synchronize: true, // Cambiar a false en producción
    }),
    UsuarioModule,
    PersonaModule,
    FuncionarioModule,
    MovimientoModule,
    CargoModule,
    TipoCargoModule,
    UnidadOrganizacionalModule,
    AmbienteModule,
    EnteModule,
    InmuebleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
