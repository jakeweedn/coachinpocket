import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { routesService } from "../services/RoutesService.js";


//sometimes with intellisense, I have to simply close my project and reopen it. 

export class RoutesController extends BaseController {
    constructor() {

        super('api/routes')
        this.router
            .get('', this.getAllRoutes)

            .use(Auth0Provider.getAuthorizedUserInfo)

            .post('', this.createRoute)

    }

    async getAllRoutes(request, response, next) {




    }

    async createRoute(request, response, next) {

        try {
            const routeData = request.body

            const userId = request.userInfo.id;
            routeData.authorId = userId;

            const createdRoute = await routesService.createRoute(routeData)
            console.log('Whats up?')

            response.send(createdRoute)

        }

        catch (error) {
            next(error)


        }




    }


}



