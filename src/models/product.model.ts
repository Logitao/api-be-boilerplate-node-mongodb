import { Schema, Document, Model, Connection} from 'mongoose';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { ObjectId } from 'bson';

export interface IProductAttributes {  
  name?: string;
  description?: string;
  quantity?: number;
  deliveryTime?: string;
  category?: string;
  colors?: string;
  size?: string,
  height?: number,
  width?: number,
  length?: number,
  photo?: string,
}

export interface IProductSchema extends Schema {

}

export interface IProductModel extends IProductAttributes, Document {
  
}

export default (conn: Connection): Model<IProductModel> => {
  
  const DataTypes = Schema.Types;
  const ProductSchema: IProductSchema = new Schema({
    name: {
      type: DataTypes.String,
      required: true
    },
    description:  {
      type: DataTypes.String,
      required: true
    },
    quantity: {
      type: DataTypes.Number,
      required: true
    },
    deliveryTime:  {
      type: DataTypes.String,
      required: true
    },
    category: {
      type: DataTypes.String,
      required: true
    },
    colors: {
      type: DataTypes.String,
      required: true
    },
    size: {
      type: DataTypes.String,
      required: true
    },
    height: {
      type: DataTypes.Number,
      required: true
    },
    width: {
      type: DataTypes.Number,
      required: true
    },
    length: {
      type: DataTypes.Number,
      required: true
    },
    photo: {
      type: DataTypes.String,
      required: true
    },
  });
  
  ProductSchema.pre('save', function(this: IProductModel, next) {
    //Validar campos(?)
    next();
  });  

  ProductSchema.pre('update', function(this: IProductModel, next): void {
    //Validar campos(?);
    next();
  });
  
  ProductSchema.methods.isPassword = (password: string, encodePassword: string) => {
    return compareSync(password, encodePassword);
  };

  const Product = conn.model<IProductModel>('Product', ProductSchema);

  return Product;
}

