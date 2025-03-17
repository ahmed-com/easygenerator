import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserObject } from '../schema/user.schema';
import { Model } from 'mongoose';

export type NewUserObject = Omit<UserObject, '_id'>;

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async findOneByEmail(email: string): Promise<UserObject | null> {
    const user = await this.userModel.findOne({ email }).exec();
    return user ? (user.toObject() as UserObject) : null;
  }

  async findOne(id: string): Promise<UserObject | null> {
    const user = await this.userModel.findById(id).exec();
    return user ? (user.toObject() as UserObject) : null;
  }

  async create(user: NewUserObject): Promise<UserObject> {
    const createdUser = new this.userModel(user);
    return (await createdUser.save()).toObject() as UserObject;
  }
}
