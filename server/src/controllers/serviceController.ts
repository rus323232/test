import ServiceModel from '../models/service';
import { AbstractController } from './abstractController';

export class ServiceController extends AbstractController {
  constructor() {
    super(ServiceModel);
  }
}
