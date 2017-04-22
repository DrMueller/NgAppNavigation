import { AppNavigationEntry, } from '../models';
import { IRoute } from '.';

export interface IAppNavigationProvider {
  provideView(): AppNavigationEntry;
  provideRoute(): IRoute;
}
