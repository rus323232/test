import { Request, Response, NextFunction } from 'express';
import { CoolHackerController } from '../controllers/coolHackerController';

export class Routes {

  public coolHackerController: CoolHackerController = new CoolHackerController();

  public routes(app): void {

    app.route('/')
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: 'GET request successful'
        });
      });

    app.route('/hacker')
      .get((req: Request, res: Response, next: NextFunction) => {
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
      }, this.coolHackerController.getEntity)
      .post(this.coolHackerController.add);

    app.route('/hacker/:hackerId')
      .get(this.coolHackerController.getByID)
      .put(this.coolHackerController.update)
      .delete(this.coolHackerController.delete);
  }
}
