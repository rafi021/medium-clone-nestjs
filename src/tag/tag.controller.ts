import { Controller, Get } from '@nestjs/common';
import { TagService } from '@app/tag/tag.service';

@Controller('tags')
export class TagController {
    constructor(private readonly tagsService: TagService){}
    @Get()
    findAll(){
        return this.tagsService.findAll();
    }
}
