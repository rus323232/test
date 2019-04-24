import { Request, Response } from 'express';
import * as mongoose from 'mongoose';

export abstract class AbstractController {

  protected constructor(private dbModel: mongoose.Model<any>) {}

  public add(req: Request, res: Response): void {
    const newService = new this.dbModel(req.body);

    newService.save((err, entity) => {
      if (err) {
        res.send(err);
      }
      res.json(entity);
    });
  }

  public getEntity(req: Request, res: Response): void {
    this.dbModel.find({}, (err, entities) => {
      if (err) {
        res.send(err);
      }
      res.json(entities);
    });
  }

  public getByID(req: Request, res: Response): void {
    this.dbModel.findById(req.params.contactId, (err, entity) => {
      if (err) {
        res.send(err);
      }
      res.json(entity);
    });
  }

  public update(req: Request, res: Response): void {
    this.dbModel.findOneAndUpdate(
      {_id: req.params.contactId},
      req.body,
      { new: true },
      (err, entity) => {
        if (err) {
          res.send(err);
        }
        res.json(entity);
      }
    );
  }

  public delete(req: Request, res: Response): void {
    this.dbModel.remove({_id: req.params.contactId}, (err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Successfully deleted' });
    });
  }
}
