import { dbContext } from "../db/DbContext.js"


class RouteLogsService {


    async getRouteLog() {

        const routeLogToGet = await dbContext.RouteLog.find()

        return routeLogToGet


    }

    async updateRouteLog() {









    }



}

export const routeLogService = new RouteLogsService()