import { Request, Response } from 'express';
import {UserDao} from '../dao/UserDao';
import { CustomLogger } from '../config/Logger'
let User = new UserDao();

export class UserService {
    
    constructor() { }
    
    public GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into UserService.ts: GpGetNounById')
     const  UserId = req.params.id;
     User.GpGetNounById(UserId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from UserService.ts: GpGetNounById')
         callback(response);
         });
    }
public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into UserService.ts: GpDelete')
     const  UserId = req.params.id;
     User.GpDelete(UserId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from UserService.ts: GpDelete')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into UserService.ts: GpSearch')
     const  UserData = req.query;
     User.GpSearch(UserData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from UserService.ts: GpSearch')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into UserService.ts: GpCreate')
     const  UserData = req.body;
     User.GpCreate(UserData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from UserService.ts: GpCreate')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into UserService.ts: GpSearchForUpdate')
     const  UserData = req.body;
     User.GpSearchForUpdate(UserData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from UserService.ts: GpSearchForUpdate')
         callback(response);
         });
    }
public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into UserService.ts: GpUpdate')
     const  UserData = req.body;
     User.GpUpdate(UserData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from UserService.ts: GpUpdate')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into UserService.ts: GpGetAllValues')
     
     User.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from UserService.ts: GpGetAllValues')
         callback(response);
         });
    }


}