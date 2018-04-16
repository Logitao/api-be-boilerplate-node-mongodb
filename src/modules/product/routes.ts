import { Request, Response, Application } from 'express';

import { IRoutes } from '../../interfaces/routes.interface';

class ProductRoutes implements IRoutes {

    constructor() { }

    initRoute(app: Application): void {
        app.route('/api/products/all').get(this.getAllProducts);
    }

    getAllProducts(req, res) {
        return res.status(200).json({'Status': 'OK'});
    }
    
}

export default new ProductRoutes();