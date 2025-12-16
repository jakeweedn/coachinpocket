import { dbContext } from "../db/DbContext.js"


class RouteLogsService {


    async getRouteLog(routeLogId) {

        const routeLogToGet = await dbContext.RouteLogs.findById(routeLogId)

        if (!routeLogToGet) {

            throw new Error("There is no route log here. Bad id")
        }

        return routeLogToGet


    }

    async getFeedback(userData) {

        const feedback = await dbContext.RouteLogs.create(userData)

        return feedback





    }

    async updateRouteLog() {









    }



}

export const routeLogService = new RouteLogsService()