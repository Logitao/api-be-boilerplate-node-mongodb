import { Request, Response, Application } from 'express';

import db from '../../models/config.models';
import Handlers from '../../utils/handlers';
import Token from './services';

class TokenController {

    constructor() { }

    async createToken(req: Request, res: Response) {
        try {    
            //db.User.find()
            Handlers.onSuccess(res, await Token.create(req.body));
        } catch (error) {            
            Handlers.onError(res, `Error to CREATE Token`, error);
        }    
    }
}

export default new TokenController();