import { Request, Response, Application } from 'express';
import * as Bluebird from 'bluebird';

import db from '../../models/config.models';
import { IProductAttributes } from '../../models/product.model';

import Handlers from '../../utils/handlers';

export class ProductServices {
    
    constructor() { }

    getAll(): Bluebird<IProductAttributes> {                 
        return db.Product
            .find()
            //.select('name description');
        //return db.mongoose.connection.collection('users').find();
    }

    create(product: IProductAttributes) {                                                                        
        return new db.Product(product)
            .save();
    }
}

export default new ProductServices();