import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"


class RouteLogService {

    async getRouteLog() {

        try {

            // const res = await api.get
        }

        catch {


        }


    }

    async updateRouteLog(routeLogData) {

        const response = await api.put('', routeLogData)
        logger.log('🍿', response.data)

        // const updatedRouteLog = new


    }

}

export const routeLogService = new RouteLogService()