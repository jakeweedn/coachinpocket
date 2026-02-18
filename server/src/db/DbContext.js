import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { ValueSchema } from '../models/Value.js'
import { RouteSchema } from '../models/Route.js';
import { RouteLogSchema } from '../models/RouteLog.js';
import { RouteSectionSchema } from '../models/RouteSection.js';
import { WatcherSchema } from '../models/Watcher.js';
import { UserRouteSchema } from '../models/UserRoute.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Routes = mongoose.model('Route', RouteSchema);

  RouteLogs = mongoose.model('RouteLog', RouteLogSchema);

  // Should above be singular or plural? 

  RouteSections = mongoose.model('RouteSection', RouteSectionSchema);

  Watchers = mongoose.model('Watcher', WatcherSchema)
  //probably won't need above and can take out later 

  UserRoutes = mongoose.model('UserRoute', UserRouteSchema)

}

export const dbContext = new DbContext()
