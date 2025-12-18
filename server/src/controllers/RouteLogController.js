import { routeLogService } from "../services/RouteLogService.js";
import BaseController from "../utils/BaseController.js";


export class RouteLogController extends BaseController {

    constructor() {

        super('api/routeLog')
        this.router

            .get('/:routeLogId', this.getRouteLog)
            .post('/routeLog', this.getFeedBack) //creates routelog
            .put('/updateRouteLog', this.updateRouteLog)

        //do i need an id in the above endpoint?? 

    }

    //Need to create routeLog before I can get one, but this threw me off...Feels wrong!


    //will definitely need auth0 stuff for this...

    async getRouteLog(request, response, next) {

        try {

            const routeLogId = request.params.routeLogId

            const routeLogToGet = await routeLogService.getRouteLog(routeLogId)


        }

        catch (error) {
            next(error)

        }



    }

    async getFeedBack(request, response, next) {

        try {

            const userData = request.body

            const routeLog = await routeLogService.getFeedback(userData)

            response.send(routeLog)



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