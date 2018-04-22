import { Request, Response, Application } from 'express';

import ProductController from './controllers';
import Auth from '../../utils/services/auth.service';
import { IRoutes } from '../../interfaces/routes.interface';

import * as Bluebird from 'bluebird';

class ProductRoutes implements IRoutes {

    constructor() { }

    initRoute(app: Application): void {
        app.route('/api/products/all').all(Auth.authorize).get(this.getAllProducts);
        app.route('/api/products/create').all(Auth.authorize).get(this.createProduct);
    }

    private getAllProducts(req: Request, res: Response) {        
        return ProductController.getAllProducts(req, res);
    }    

    private createProduct(req: Request, res: Response) {
        return ProductController.createProduct(req, res);
    }
}

export default new ProductRoutes();