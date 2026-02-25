import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { userRoutesService } from "../services/UserRoutesService.js";


export class UserRouteController extends BaseController {

    constructor() {

        super('api/userroutes')
        this.router

            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createUserRoute)


    }

    async createUserRoute(request, response, next) {

        try {
            console.log('Creating user route')
            const userRouteData = request.body

            const userInfo = request.userInfo
            userRouteData.accountId = userInfo.id

            const createdUserRoute = await userRoutesService.createUserRoute(userRouteData)

            response.send(createdUserRoute)




        }

        catch {



        }



    }





}