import { dbContext } from "../db/DbContext.js"


class UserRoutesService {

    async createUserRoute(userRouteData) {

        const createdUserRoute = await dbContext.UserRoutes.create(userRouteData)

        return createdUserRoute



        //populating might not make sense because own userroute... 






    }





}

export const userRoutesService = new UserRoutesService()