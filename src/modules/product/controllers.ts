import { Request, Response, Application } from 'express';
import * as _ from 'lodash';

import Handlers from '../../utils/handlers';
import Product from './services';

class ProductController {

    constructor() { }

    async getAllProducts(req: Request, res: Response) {
        try {            
            Handlers.onSuccess(res, await Product.getAll());
        } catch (error) {            
            Handlers.onError(res, `Error to GET Users`, error);
        }
        
        //res.status(200).json({ payload: x }); 
        //User.getAll();
            //.then(_.partial(Handlers.onSuccess, res))        
            //.catch(_.partial(Handlers.onError, res, `Error to GET Users`))
    }

    createProduct(req: Request, res: Response) {
        req.body = {  
            name: 'Rosa',
            description: 'Rosa Rosada do Paraguai',
            quantity: 23,
            deliveryTime: '5 horas',
            category: 'Flores',
            colors: 'Vermelho',
            size: '5cm',
            height: 2,
            width: 2,
            length: 2,
            photo: 'xxxx',
        }        
        Product.create(req.body)
            .then(_.partial(Handlers.onSuccess, res))        
            .catch(_.partial(Handlers.dbErrorHandler, res))
            .catch(_.partial(Handlers.onError, res, `Error to CREATE User`))
    }
}

export default new ProductController();