import { Request, Response, Application } from 'express';
import * as Bluebird from 'bluebird';

import db from '../../models/config.models';
import { IUserAttributes } from '../../models/user.model';

import Handlers from '../../utils/handlers';

export class UserServices {
    
    constructor() { }

    getAll(): Bluebird<IUserAttributes> {          
        return db.User.find();
    }

    create(user: IUserAttributes){                                                       
        return new db.User(user).save();
    }
}

export default new UserServices();