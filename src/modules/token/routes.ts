import { Request, Response, Application } from 'express';

import TokenController from './controllers';
import { IRoutes } from '../../interfaces/routes.interface';


class TokenRoutes implements IRoutes {

    constructor() { }

    initRoute(app: Application): void {
        //app.route('/api/token/create').post(this.createToken);
        app.route('/api/token/verify').post(this.verifyTokenValidate);
    }

    private createToken(req, res) {
        return TokenController.createToken(req, res);
    }

    private verifyTokenValidate(req, res) {
        console.log('Chegou aqui')
        console.log(req.body)
        return false;//TokenController.verify(req, res);
    }
    
}

export default new TokenRoutes();