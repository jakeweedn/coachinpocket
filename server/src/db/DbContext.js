import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { ValueSchema } from '../models/Value.js'
import { RouteSchema } from '../models/Route.js';
import { RouteLogSchema } from '../models/RouteLog.js';
import { RouteSectionSchema } from '../models/RouteSection.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Routes = mongoose.model('Route', RouteSchema);

  RouteLogs = mongoose.model('RouteLogs', RouteLogSchema);

  // Should above be singular or plural? 

  RouteSections = mongoose.model('RouteSections', RouteSectionSchema);

}

export const dbContext = new DbContext()
