import async from 'async';
import db from './db';
import {Product} from './schema';
import productData from '../product.json';


async.series([
  (cb) => {db.connect('product',cb);},
  (cb) => Product.find().remove(cb),
  (cb) => {console.log("--products delete");cb();},
  (cb) => Product.create(productData,cb),
  (cb) => {console.log("--products created");cb();}
], () => {
  console.log('db init complete!');
});
