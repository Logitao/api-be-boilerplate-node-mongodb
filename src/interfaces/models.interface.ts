import { Model } from 'mongoose';

import { IUserModel } from "../models/user.model";
import { IProductModel } from "../models/product.model";

export interface IModels {

    User: Model<IUserModel>;
    Product: Model<IProductModel>;

}