import {
    Body,
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Query,
    ParseIntPipe,
  } from '@nestjs/common';
  import { CargoService } from 'src/cargo/service/cargo.service';
  import { CrearCargoDto, ActualizarCargoDto, FiltroCargoDto } from 'src/cargo/dto';
  
  @Controller('cargos')
  export class CargoController {
    constructor(private readonly cargoService: CargoService) {}
  
  
    @Post()
    async create(@Body() crearCargoDto: CrearCargoDto) {
      return this.cargoService.create(crearCargoDto);
    }
  

    @Get()
    async findAll(@Query() filtroCargo: FiltroCargoDto) {
      return this.cargoService.findAll(filtroCargo);
    }
  
    
    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number) {
      return this.cargoService.findOne(id);
    }
  
    
    @Put(':id')
    async update(
      @Param('id', ParseIntPipe) id: number,
      @Body() actualizarCargoDto: ActualizarCargoDto,
    ) {
      return this.cargoService.update(id, actualizarCargoDto);
    }
  
    
    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number) {
      return this.cargoService.remove(id);
    }
  }
  