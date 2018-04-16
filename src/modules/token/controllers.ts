import { Request, Response, Application } from 'express';

import Token from './services';
import db from '../../models/config.models';
import Handlers from '../../utils/handlers';
import userModel, { IUserModel, IUserAttributes } from '../../models/user.model';


class TokenController {

    constructor() { }

    async createToken(req: Request, res: Response) {
        const errorMessage: string = 'Unathorized, wrong email or password!';                        
        try {
            const user: IUserModel = await db.User.findOne({email: req.body.email});              
            if (!user || !await new db.User().isPassword(req.body.password, user.password)) {
                throw new Error(errorMessage);
            }                        
            Handlers.onSuccess(res, await Token.create(req.body));
        } catch (error) {                       
            Handlers.onError(res, error.message, error);
        }    
    }
}

export default new TokenController();