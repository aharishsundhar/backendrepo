
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
   name: String,
   email: String
})

const UserModel = mongoose.model('User', UserSchema, 'User');
export default UserModel;
