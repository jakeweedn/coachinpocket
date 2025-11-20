import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { ValueSchema } from '../models/Value.js'
import { RouteSchema } from '../models/Route.js';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Routes = mongoose.model('Route', RouteSchema)
}

export const dbContext = new DbContext()
