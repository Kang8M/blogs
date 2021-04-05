import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { CreateCatDto } from 'src/cats/dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from 'src/cats/interfaces/cat.interface';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Get()
  async findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    console.log(id);
    return `#${id} cat`;
  }

  @Post()
  @HttpCode(204)
  create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }
}
