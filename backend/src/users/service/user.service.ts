import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserObject } from '../schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOneByEmail(email: string): Promise<UserObject | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async findOne(id: string): Promise<UserObject | null> {
    return this.userModel.findById(id).exec();
  }

  async create(user: User): Promise<UserObject> {
    const createdUser = new this.userModel(user);
    return createdUser.save();
  }
}
