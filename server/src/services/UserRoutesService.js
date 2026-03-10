import { dbContext } from "../db/DbContext.js"


class UserRoutesService {


    async getUserRoutes() {

        const userRoutes = await dbContext.UserRoutes.find()
        return userRoutes

    }




    async createUserRoute(userRouteData) {

        const createdUserRoute = await dbContext.UserRoutes.create(userRouteData)

        return createdUserRoute



        //populating might not make sense because own userroute... 






    }

    async deleteUserRoute(userRouteId) {

        const userRoute = await dbContext.UserRoutes.findById(userRouteId)

        if (!userRoute) {

            throw new Error("There is no userRoute here. Bad id")


        }

        await userRoute.deleteOne()
        return ('This user route was deleted!')






    }





}

export const userRoutesService = new UserRoutesService()