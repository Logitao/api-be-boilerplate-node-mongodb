import { Request, Response, Application } from 'express';
import * as Bluebird from 'bluebird';

import db from '../../models/config.models';

import Auth from '../../utils/services/auth.service';
import Handlers from '../../utils/handlers';

export class TokenServices {
    
    constructor() { }

    create(id: string): Promise<string> {                                                                             
        return Auth.generateToken(id);
    }
}

export default new TokenServices();