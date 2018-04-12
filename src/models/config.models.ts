import * as fs from 'fs';
import * as path from 'path';
import { Mongoose, Connection, Document, Model} from 'mongoose';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';

import { IDbConnection } from './../interfaces/dbConnection.interface';

//Models
import { IUserSchema, IUserModel, IUserAttributes } from './user.model';

const env = 'development';
const basename: string = path.basename(module.filename);

let config = require(path.resolve(`${__dirname}./../config/config.json`))[env];
let mongoDB = 'mongodb://127.0.0.1:27017/pll';

let db = null;

if(!db) {
  
  db = {};
  
  const mongoose: Mongoose = new Mongoose();  
  const conn: Connection = mongoose.createConnection(mongoDB);

  fs
    .readdirSync(__dirname)
    .filter((file: string) => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach((file: string) => {
      const model: Model<Document> = require(path.join(__dirname, file)).default(conn);                                                     
      db[model['modelName']] = model;                
    })
  
  Object.keys(db)
    .forEach((modelName: string) => {
      if (db[modelName]) {        
        
      }
    })
    
  db['mongoose'] = conn;       
}
export default <IDbConnection>db;
