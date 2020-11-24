import * as mongoose from 'mongoose';
import UserModel from '../models/User';
import { CustomLogger } from '../config/Logger'


export class UserDao {
    private User = UserModel;
    constructor() { }
public GpGetNounById(UserId, callback){
new CustomLogger().showLogger('info', 'Enter into UserDao.ts: GpGetNounById')

this.User.findById(UserId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from UserDao.ts: GpGetNounById');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpDelete(UserId, callback){
new CustomLogger().showLogger('info', 'Enter into UserDao.ts: GpDelete')

this.User.findByIdAndRemove(UserId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from UserDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(UserData, callback){
new CustomLogger().showLogger('info', 'Enter into UserDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(UserData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.User.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from UserDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(UserData, callback){
new CustomLogger().showLogger('info', 'Enter into UserDao.ts: GpCreate')
let temp = new UserModel(UserData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from UserDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(UserData, callback){
new CustomLogger().showLogger('info', 'Enter into UserDao.ts: GpSearchForUpdate')

this.User.findOneAndUpdate({ _id: UserData._id }, UserData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from UserDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpUpdate(UserData, callback){
new CustomLogger().showLogger('info', 'Enter into UserDao.ts: GpUpdate')

this.User.findOneAndUpdate({ _id: UserData._id }, UserData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from UserDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into UserDao.ts: GpGetAllValues')

this.User.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from UserDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}


}