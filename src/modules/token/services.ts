import { Request, Response, Application } from 'express';
import * as Bluebird from 'bluebird';

import db from '../../models/config.models';
import { IUserAuth } from '../../utils/services/auth.service';

import Auth from '../../utils/services/auth.service';
import Handlers from '../../utils/handlers';

export class TokenServices {
    
    constructor() { }

    create(user: IUserAuth) {                                                                             
        return Auth.generateToken(user);
    }
}

export default new TokenServices();