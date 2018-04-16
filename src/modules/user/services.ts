import { Request, Response, Application } from 'express';
import * as Bluebird from 'bluebird';

import db from '../../models/config.models';
import { IUserAttributes } from '../../models/user.model';

import Handlers from '../../utils/handlers';

export class UserServices {
    
    constructor() { }

    getAll(): Bluebird<IUserAttributes> {                 
        return db.User
            .find({'email': 'mp.fortunato@gmail.com'})
            .select('name email');
        //return db.mongoose.connection.collection('users').find();
    }

    getByEmail(user: IUserAttributes): Bluebird<IUserAttributes> {                 
        return db.User
            .find({'email': 'mp.fortunato@gmail.com'})
            .select('name email');        
    }

    create(user: IUserAttributes){                                                       
        return new db.User(user).save();
    }
}

export default new UserServices();