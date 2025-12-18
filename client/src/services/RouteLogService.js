import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"


class RouteLogService {

    async getRouteLog() {

        try {
            const response = await api.get('')


        }

        catch (err) {
            logger.error('HAVE YOU STARTED YOUR SERVER YET', err)


        }


    }

    async updateRouteLog(routeLogData) {

        const response = await api.put('/routes', routeLogData)
        logger.log('🍿', response.data)

        // const updatedRouteLog = new


    }

}

export const routeLogService = new RouteLogService()