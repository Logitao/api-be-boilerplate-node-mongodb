import { Request, Response, NextFunction } from 'express';
import * as HTTPStatus from 'http-status';
import * as jwt from 'jsonwebtoken';
import * as path from 'path';
import * as _ from 'lodash';

import { IUserModel } from '../../models/user.model';
import Handlers from '../../utils/handlers';

const env = process.env.NODE_ENV || 'development';
const config = require(path.resolve(`${__dirname}./../../config/config.json`))[env];

export interface IUserAuth {
    id: string,
    email: string;
}

class Auth {

    constructor() { }

    async generateToken(user: IUserAuth) {        
        const payload = {sub: user.id};        
        return {
            token: await jwt.sign(payload, config.secret, { expiresIn: '1h' })
        }
    }

    async decodeToken(token) {  
        const data = await jwt.verify(token, config.secret);
        return data;
    }

    async authorize(req: Request, res: Response, next: NextFunction) {                                        
        try {
            const token = req.headers['authorization'];
            if(!token || token === undefined) {
                res.status(HTTPStatus.UNAUTHORIZED);   
                //_.partial(Handlers.authFail, res);                
            } else {
                const Authx = new Auth();
                const y = await Authx.decodeToken(token);  
                _.partial(Handlers.onNext, next);              
            }                        
        } catch(error) {
            res.status(HTTPStatus.UNAUTHORIZED).json({
                message: error
            });            
        }        
    }
}

export default new Auth();