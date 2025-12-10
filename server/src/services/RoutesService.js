import { dbContext } from "../db/DbContext.js"

//When I get back: Fill out body of postman request to create route!

class RoutesService {

    async getAllRoutes() {

        const routes = await dbContext.Routes.find()

            .populate('setter')



        return routes



    }

    async getRoutesBySection(routeSectionId) {

        const routesBySection = await dbContext.Routes.find({ routeSectionId: routeSectionId })

        return routesBySection


    }

    //Only setters should be able to create routes! 
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


    //Will allow users to mark the route as completed 
    async completedRoute(routeId) {

        const completedRoute = await dbContext.Routes.findById(routeId)

        if (!completedRoute) {

            throw new Error("There is no route here. Bad id")
        }

        completedRoute.completed = true

        await completedRoute.save()

        return completedRoute


    }

}






export const routesService = new RoutesService()