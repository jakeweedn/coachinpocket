import { dbContext } from "../db/DbContext.js"


class RoutesService {

    async getAllRoutes() {



    }

    async createRoute(routeData) {

        const route = await dbContext.Routes.create(routeData)

        await route.populate('setter')
    }



}

export const routesService = new RoutesService()