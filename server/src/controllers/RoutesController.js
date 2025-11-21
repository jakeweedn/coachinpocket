import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { routesService } from "../services/RoutesService.js";


//sometimes with intellisense, I have to simply close my project and reopen it. 

export class RoutesController extends BaseController {
    constructor() {

        super('api/routes')
        this.router
            .get('', this.getAllRoutes)

            // .use(Auth0Provider.getAuthorizedUserInfo)

            .post('', this.createRoute)
            .put('/:routeId', this.completedRoute)
            .delete('/:routeId', this.deleteRoute)

    }

    async getAllRoutes(request, response, next) {

        try {
            const routes = await routesService.getAllRoutes()
            response.send(routes)


        }
        catch (error) {
            next(error)


        }






    }
    //Only setters should be able to create routes! 

    async createRoute(request, response, next) {

        try {
            const routeData = request.body

            // const userId = request.userInfo.id;
            // routeData.setterId = userId;

            const createdRoute = await routesService.createRoute(routeData)
            console.log('Whats up?')

            response.send(createdRoute)

        }

        catch (error) {
            next(error)


        }




    }
    //Formatting post request?
    //How much of body will I have to renter every time. Just the values or the properties themselves? 

    //For mobile app? Looks like I need different framework? 

    async deleteRoute(request, response, next) {

        try {

            const routeId = request.params.routeId


            // const userId = request.userInfo.id;
            // routeData.authorId = userId 

            const routeToDelete = await routesService.deleteRoute(routeId)

            response.send(routeToDelete)

        }

        catch (error) {
            next(error)

        }



    }
    //Only setters should be able to create routes! 
    async completedRoute(request, response, next) {


        try {

            const routeId = request.params.routeId

            const completedRoute = await routesService.completedRoute(routeId)
            response.send(completedRoute)

        }

        catch (error) {
            next(error)


        }
    }


}



