import * as express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes/serviceRoutes';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import * as cors from 'cors';

dotenv.config();

class App {

  public app: express.Application = express();
  public routePrv: Routes = new Routes();
  public mongoUrl: string = process.env.MONGODB_URI;

  constructor() {
    this.config();
    this.mongoSetup();
    this.routePrv.routes(this.app);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
  }

  private mongoSetup(): void {
    mongoose.connect(this.mongoUrl, { useNewUrlParser: true });
  }
}

export default new App().app;
