import BaseController from "../utils/BaseController.js";


export class RoutesSectionController extends BaseController {

    constructor() {

        super('api/routesection')
        this.router
            .get('', this.getAllRouteSections)
        // .use(Auth0Provider.getAuthorizedUserInfo)


    }


    async getAllRouteSections(request, response, next) {

        try {
            //finish when back from haricut 


        }

        catch (error) {
            next(error)


        }

    }

}