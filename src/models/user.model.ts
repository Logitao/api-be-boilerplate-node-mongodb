import * as Mongoose from 'mongoose';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';

export interface IUserAttributes {
  name?: string;
  email?: string;
  password?: string;
  photo?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IUserSchema extends IUserAttributes, Mongoose.Schema {

}

export interface IUserModel extends IUserAttributes, Mongoose.Document {
  //isPassword(encodePassword: string, password: string): boolean;
}

export default (mongoose: Mongoose.Mongoose): Mongoose.Model<IUserModel> => {
  
  const UserSchema: IUserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    photo: String,
    createdAt: Date,  
  });

  UserSchema.pre('save', (): void => {
    const salt = genSaltSync();
    this.password = hashSync(this.password, salt);
  });
  
  UserSchema.pre('update', (): void => {
    if (this.password.changed) {
      const salt = genSaltSync();
      this.password = hashSync(this.password, salt);
    }
  });
  
  UserSchema.methods.isPassword = (password: string, encodePassword: string) => {
    return compareSync(password, encodePassword);
  };

  return mongoose.model<IUserModel>('Users', UserSchema);
}

