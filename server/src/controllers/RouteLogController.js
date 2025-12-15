import { routeLogService } from "../services/RouteLogService.js";
import BaseController from "../utils/BaseController.js";


export class RouteLogController extends BaseController {

    constructor() {

        super('api/routelog')
        this.router

            .get('/routelog', this.getRouteLog)
            .put('/updateroutelog', this.updateRouteLog)

        //do i need an id in the above endpoint?? 

    }



    //will definitely need auth0 stuff for this...

    async getRouteLog(request, response, next) {

        try {

            const routeLogToGet = await routeLogService.getRouteLog()


        }

        catch (error) {
            next(error)

        }



    }

    async updateRouteLog(request, response, next) {

        try {

            console.log('Updating route log')
            const updatedRouteLog = await routeLogService.updateRouteLog()

            response.send(updatedRouteLog)


        }

        catch (error) {
            next(error)



        }


    }

}