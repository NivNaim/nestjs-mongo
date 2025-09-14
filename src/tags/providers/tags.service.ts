import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTagDto } from '../dtos/create-tag.dto';
import { Tag } from '../tag.schema';

@Injectable()
export class TagsService {
  constructor(
    @InjectModel(Tag.name)
    private readonly tagsModel: Model<Tag>,
  ) {}

  public async createTag(createTagDto: CreateTagDto): Promise<Tag> {
    const newTag = new this.tagsModel(createTagDto);
    return await newTag.save();
  }
}
