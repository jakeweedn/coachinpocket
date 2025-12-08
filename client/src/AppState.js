import { reactive } from 'vue'
import { Route } from './models/Route.js'
import { RouteSection } from './models/RouteSection.js'


// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  /** @type {Route[]} */
  routes: [],

  /** @type {Route} */
  activeRoute: null,

  /** @type {RouteSection[]} */
  routeSections: [],

  /** @type {RouteSection} */
  activeRouteSection: null


})

