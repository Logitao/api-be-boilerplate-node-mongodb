import * as fs from 'fs';
import * as path from 'path';
import * as Mongoose from 'mongoose';

const env = 'development';
const basename: string = path.basename(module.filename);

let config = require(path.resolve(`${__dirname}./../config/config.json`))[env];
let mongoDB = 'mongodb://127.0.0.1:27017/pll';

let db = null;

if(!db) {
  
  db = {};
  //Mongoose.connect(mongoDB);
  Mongoose.createConnection(mongoDB);

  fs
    .readdirSync(__dirname)
    .filter((file: string) => {
      return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach((file: string) => {
      console.log('O ARQUIVO PRÒXIMO É: ');
      console.log(file);
      //const model = Mongoose.model('Users', )
    })
  //db = 
  //db.model
}

export default db;