import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { userRoutesService } from "../services/UserRoutesService.js";


export class UserRoutesController extends BaseController {

    constructor() {

        super('api/userroutes')
        this.router

            // .delete('/:userRouteId', this.deleteUserRoute)
            .use(Auth0Provider.getAuthorizedUserInfo)
            //everything should be below the middleware in this case. 

            .get('', this.getUserRoutes)
            .post('', this.createUserRoute)

            // We can do a put request later if we need to... 
            // .put('/modify/:userRouteId') 
            .delete('/:userRouteId', this.deleteUserRoute)


    }


    async getUserRoutes(request, response, next) {

        try {

            console.log('Getting user routes')
            const userRoutes = await userRoutesService.getUserRoutes()

            response.send(userRoutes)





        }


        catch (error) {
            next(error)




        }






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

        catch (error) {

            next(error)



        }



    }



    //check video for delete request..
    //why on earth am I getting a 404???


    //just skip some auth lines for this request?? 







    async deleteUserRoute(request, response, next) {

        try {

            const userRouteId = request.params.userRouteId
            // const userRouteData = request.body

            // const userInfo = request.userInfo
            // userRouteData.creatorId= userInfo.id

            const userRoute = await userRoutesService.deleteUserRoute(userRouteId)

            response.send(userRoute)



        }

        catch (error) {

            next(error)



        }






    }





}