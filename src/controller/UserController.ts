import { Request, Response } from 'express';
import { UserService } from '../service/UserService';
import { CustomLogger } from '../config/Logger'
let User = new UserService();

export class UserController {
    
    constructor() { }
    
    public GpGetNounById(req: Request, res: Response) {
User.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into UserController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from UserController.ts: GpGetNounById');
    })}
public GpDelete(req: Request, res: Response) {
User.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into UserController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from UserController.ts: GpDelete');
    })}
public GpSearch(req: Request, res: Response) {
User.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into UserController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from UserController.ts: GpSearch');
    })}
public GpCreate(req: Request, res: Response) {
User.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into UserController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from UserController.ts: GpCreate');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
User.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into UserController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from UserController.ts: GpSearchForUpdate');
    })}
public GpUpdate(req: Request, res: Response) {
User.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into UserController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from UserController.ts: GpUpdate');
    })}
public GpGetAllValues(req: Request, res: Response) {
User.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into UserController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from UserController.ts: GpGetAllValues');
    })}


}