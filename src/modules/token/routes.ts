import { Request, Response, Application } from 'express';

import TokenController from './controllers';
import Auth from '../../utils/services/auth.service';
import { IRoutes } from '../../interfaces/routes.interface';


class TokenRoutes implements IRoutes {

    constructor() { }

    initRoute(app: Application): void {
        app.route('/api/token/create').post(this.createToken);
        app.route('/api/token/verify').all(Auth.authorize).get(this.verifyTokenValidate);
    }

    private createToken(req, res) {
        return TokenController.createToken(req, res);
    }

    private verifyTokenValidate(req, res) {
        return res.status(200).send({status: true});
    }
    
}

export default new TokenRoutes();