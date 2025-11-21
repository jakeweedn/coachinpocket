import { dbContext } from "../db/DbContext.js"

//When I get back: Fill out body of postman request to create route!

class RoutesService {

    async getAllRoutes() {

        const routes = await dbContext.Routes.find()

            .populate('setter')



        return routes



    }

    async createRoute(routeData) {

        const createdRoute = await dbContext.Routes.create(routeData)

        await createdRoute.populate('setter')

        return createdRoute




    }

    async deleteRoute(routeId) {

        const routeToDelete = await dbContext.Routes.findById(routeId)

        if (!routeToDelete) {

            throw new Error("There is no route here. Bad id.")
        }

        await routeToDelete.deleteOne()
        return (`${routeToDelete} was deleted`)


    }



}

export const routesService = new RoutesService()