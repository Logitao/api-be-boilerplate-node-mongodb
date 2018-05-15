import { Request, Response, Application } from 'express';

import { IUserModel } from '../../models/user.model';

import db from '../../models/config.models';
import Token from './services';
import Handlers from '../../utils/handlers';

class TokenController {

    constructor() { }

    async createToken(req: Request, res: Response) {
        const credentials = {
            email: req.body.email,
            password: req.body.password,
        }
        const errorMessage: string = 'Unathorized, wrong email or password!';                        
        try {
                        
            const user: IUserModel = await db.User.findOne({email: credentials.email});                
            if (!user) throw new Error(errorMessage);

            const isPassword: boolean = await new db.User().isPassword(credentials.password, user.password);                        
            if (!isPassword) throw new Error(errorMessage);                    
            
            let token = await Token.create(user._id);            
            const authZ = {
                id: user._id,
                email: user.email,
                name: user.name,
                token
            }

            Handlers.onSuccess(res, authZ);                             
        } catch (error) {  
            console.log(error.message); 
            if (error.message !== errorMessage) {
                Handlers.onError(res, errorMessage, error);    
            } else {
                Handlers.onError(res, error.message, error);
            }
        }    
    }

    async verify(req: Request, res: Response) {        
        const token = req.body.token;
        try {
            let data = await Token.verify(token)
            Handlers.onSuccess(res, data)
        } catch(error) {
            Handlers.onError(res, error.message, error);
        }
    }
}

export default new TokenController();