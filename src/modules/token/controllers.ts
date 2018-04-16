import { Request, Response, Application } from 'express';

import { IUserModel } from '../../models/user.model';

import db from '../../models/config.models';
import Token from './services';
import Handlers from '../../utils/handlers';

class TokenController {

    constructor() { }

    async createToken(req: Request, res: Response) {
        const errorMessage: string = 'Unathorized, wrong email or password!';                        
        try {

            const user: IUserModel = await db.User.findOne({email: req.body.email});    
            const isPassword: boolean = await new db.User().isPassword(req.body.password, user.password);
            
            if (!user || !isPassword) throw new Error(errorMessage);

            Handlers.onSuccess(res, await Token.create(req.body));
        } catch (error) {  
            console.log(error.message); 
            if (error.message !== errorMessage) {
                Handlers.onError(res, error.message, error);    
            } else {
                Handlers.onError(res, `Error CREATE Token`, error);
            }
        }    
    }
}

export default new TokenController();