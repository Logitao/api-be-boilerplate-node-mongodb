import * as jwt from 'jsonwebtoken';
import * as path from 'path';

import { IUserAttributes } from '../../models/user.model';

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
            token: jwt.sign(payload, config.secret, { expiresIn: '1d' })
        }
    }

    async decodeToken(token) {
        const data = await jwt.verify(token, config.secret);
        return data;
    }

}

export default new Auth();