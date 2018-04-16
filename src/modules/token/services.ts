import { Request, Response, Application } from 'express';
import * as Bluebird from 'bluebird';

import db from '../../models/config.models';
import { IUserAttributes } from '../../models/user.model';

import Auth from '../../utils/services/auth.service';
import Handlers from '../../utils/handlers';

export class TokenServices {
    
    constructor() { }

    create(user: IUserAttributes) {                                                       
        const userX = db.User
            .find({'email': 'mp.fortunato@gmail.com'})
            .select('email'); 
        console.log(userX);
        return Auth.generateToken(userX);
    }
}

export default new TokenServices();