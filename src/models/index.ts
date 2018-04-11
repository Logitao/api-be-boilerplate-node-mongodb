import * as fs from 'fs';
import * as path from 'path';
import * as Mongoose from 'mongoose';
import { genSaltSync, hashSync, compareSync } from 'bcryptjs';

import { IUserSchema, IUserModel } from './user.model';
import { IDbConnection } from './../interfaces/dbConnection.interface';
import { Schema } from 'mongoose';

const env = 'development';
const basename: string = path.basename(module.filename);

let config = require(path.resolve(`${__dirname}./../config/config.json`))[env];
let mongoDB = 'mongodb://127.0.0.1:27017/pll';

let db = null;

if(!db) {
  
  db = {};
  //Mongoose.connect(mongoDB);
  const mongoose: Mongoose.Mongoose = new Mongoose.Mongoose();//createConnection(mongoDB);
  mongoose.createConnection(mongoDB);

  fs
    .readdirSync(__dirname)
    .filter((file: string) => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach((file: string) => {
      const model: Mongoose.Model<Mongoose.Document> = require(path.join(__dirname, file)).default(mongoose);
      console.log(model.modelName);     
                                
      db[model['modelName']] = model;      
    })
  
  Object.keys(db)
    .forEach((modelName: string) => {
      
    })
  db['mongoose'] = mongoose; 
   
  //console.log(db);
}

export default <IDbConnection>db;