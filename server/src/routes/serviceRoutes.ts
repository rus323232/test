import { Request, Response, NextFunction } from 'express';
import { ServiceController } from '../controllers/serviceController';

export class Routes {

  public serviceController: ServiceController = new ServiceController();

  public routes(app): void {

    app.route('/')
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: 'GET request successful'
        });
      });

    app.route('/service')
      .get((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
      }, this.serviceController.getEntity)
      .post(this.serviceController.add);

    app.route('/service/:contactId')
      .get(this.serviceController.getByID)
      .put(this.serviceController.update)
      .delete(this.serviceController.delete);
  }
}
