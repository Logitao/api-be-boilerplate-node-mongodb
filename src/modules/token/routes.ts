import { Request, Response, Application } from 'express';

import TokenController from './controllers';
import { IRoutes } from '../../interfaces/routes.interface';


class TokenRoutes implements IRoutes {

    constructor() { }

    initRoute(app: Application): void {
        app.route('/api/token/create').post(this.createToken);
    }

    private createToken(req, res) {
        return TokenController.createToken(req, res);
    }
    
}

export default new TokenRoutes();