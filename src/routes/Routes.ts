import { Request, Response, NextFunction } from "express";
import { UserController } from '../controller/UserController';


export class Routes {
    private User: UserController = new UserController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/User/:id').get(this.User.GpGetNounById);
app.route('/User/:id').delete(this.User.GpDelete);
app.route('/User/get/search').get(this.User.GpSearch);
app.route('/User').post(this.User.GpCreate);
app.route('/User/get/update').put(this.User.GpSearchForUpdate);
app.route('/User').put(this.User.GpUpdate);
app.route('/User').get(this.User.GpGetAllValues);
     }

}