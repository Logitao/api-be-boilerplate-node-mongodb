import { Schema, Document, Model, Connection} from 'mongoose';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';

export interface IUserAttributes {
  name?: string;
  email?: string;
  password?: string;
  //photo?: string;
  //createdAt?: string;
  //updatedAt?: string;
}

export interface IUserSchema extends Schema {

}

export interface IUserModel extends IUserAttributes, Document {

}

export default (conn: Connection): Model<IUserModel> => {
  
  const UserSchema: IUserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    //photo: String,
    //createdAt: Date,  
  });
  
  UserSchema.pre('save', function(this: IUserModel, next) {
    const salt = genSaltSync();    
    this.password = hashSync(this.password, salt);
    next();
  });  

  UserSchema.pre('update', function(this: IUserModel, next): void {
    if (this.password) {      
      const salt = genSaltSync();
      this.password = hashSync(this.password, salt);
    }
    next();
  });
  
  UserSchema.methods.isPassword = (password: string, encodePassword: string) => {
    return compareSync(password, encodePassword);
  };

  const User = conn.model<IUserModel>('User', UserSchema);

  return User;
}

