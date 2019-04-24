import CoolHackerModel from '../models/coolhacker';
import { AbstractController } from './abstractController';

export class CoolHackerController extends AbstractController {
  constructor() {
    super(CoolHackerModel);
  }
}
