import { Mongo } from 'meteor/mongo';

export const Employees = new Mongo.Collection('employees');
//This is how we pull 'collection.name' from the database in MeteorJS
