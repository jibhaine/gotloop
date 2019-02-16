import {
  Get,
  Post,
  Body,
  Put,
  Delete,
  Query,
  Param,
  Controller,
} from '@nestjs/common';

import { LoopService } from './loop.service';
import { CreateLoopDto, CreateCommentDto } from './dto';
import { LoopsRO, LoopRO } from './loop.interface';
import { CommentsRO } from './loop.interface';
import { User } from '../user/user.decorator';

import {
  ApiUseTags,
  ApiBearerAuth,
  ApiResponse,
  ApiOperation,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUseTags('loops')
@Controller('loops')
export class LoopController {
  constructor(private readonly loopService: LoopService) {}

  @ApiOperation({ title: 'Get all loops' })
  @ApiResponse({ status: 200, description: 'Return all loops.' })
  @Get()
  async findAll(@Query() query): Promise<LoopsRO> {
    return await this.loopService.findAll(query);
  }

  @Get(':slug')
  async findOne(@Param('slug') slug): Promise<LoopRO> {
    return await this.loopService.findOne({ slug });
  }

  @Get(':slug/comments')
  async findComments(@Param('slug') slug): Promise<CommentsRO> {
    return await this.loopService.findComments(slug);
  }

  @ApiOperation({ title: 'Create loop' })
  @ApiResponse({
    status: 201,
    description: 'The loop has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post()
  async create(
    @User('id') userId: number,
    @Body('loop') loopData: CreateLoopDto,
  ) {
    return this.loopService.create(userId, loopData);
  }

  @ApiOperation({ title: 'Update loop' })
  @ApiResponse({
    status: 201,
    description: 'The loop has been successfully updated.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Put(':slug')
  async update(@Param() params, @Body('loop') loopData: CreateLoopDto) {
    // Todo: update slug also when title gets changed
    return this.loopService.update(params.slug, loopData);
  }

  @ApiOperation({ title: 'Delete loop' })
  @ApiResponse({
    status: 201,
    description: 'The loop has been successfully deleted.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete(':slug')
  async delete(@Param() params) {
    return this.loopService.delete(params.slug);
  }

  @ApiOperation({ title: 'Create comment' })
  @ApiResponse({
    status: 201,
    description: 'The comment has been successfully created.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post(':slug/comments')
  async createComment(
    @Param('slug') slug,
    @Body('comment') commentData: CreateCommentDto,
  ) {
    return await this.loopService.addComment(slug, commentData);
  }

  @ApiOperation({ title: 'Delete comment' })
  @ApiResponse({
    status: 201,
    description: 'The loop has been successfully deleted.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete(':slug/comments/:id')
  async deleteComment(@Param() params) {
    const { slug, id } = params;
    return await this.loopService.deleteComment(slug, id);
  }

  @ApiOperation({ title: 'Favorite loop' })
  @ApiResponse({
    status: 201,
    description: 'The loop has been successfully favorited.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Post(':slug/favorite')
  async favorite(@User('id') userId: number, @Param('slug') slug) {
    return await this.loopService.favorite(userId, slug);
  }

  @ApiOperation({ title: 'Unfavorite loop' })
  @ApiResponse({
    status: 201,
    description: 'The loop has been successfully unfavorited.',
  })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Delete(':slug/favorite')
  async unFavorite(@User('id') userId: number, @Param('slug') slug) {
    return await this.loopService.unFavorite(userId, slug);
  }

  @ApiOperation({ title: 'Get loop feed' })
  @ApiResponse({ status: 200, description: 'Return loop feed.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @Get('feed')
  async getFeed(
    @User('id') userId: number,
    @Query() query,
  ): Promise<LoopsRO> {
    return await this.loopService.findFeed(userId, query);
  }
}
