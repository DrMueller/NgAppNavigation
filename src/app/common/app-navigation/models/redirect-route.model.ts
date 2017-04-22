import { IRoute } from '../interfaces';

export class RedirectRoute implements IRoute {
  constructor(public path: string, public redirectTo: string, public pathMatch: string) { }
}

