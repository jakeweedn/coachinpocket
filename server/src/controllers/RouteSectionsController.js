
import { Auth0Provider } from "@bcwdev/auth0provider";
import { routeSectionsService } from "../services/RouteSectionsService.js";
import { routesService } from "../services/RoutesService.js";
import BaseController from "../utils/BaseController.js";


export class RouteSectionsController extends BaseController {

    constructor() {

        super('api/sections')
        this.router

            .get('', this.getAllRouteSections)
            .get('/:routeSectionId', this.getRouteSectionById)
            .get('/:routeSectionId/routes', this.getRoutesBySectionId) //'wallSection' is the attribute on my model and 'RouteSection' is another model itself 

            .get('/:routeSectionId/watchers', this.getWatchersByRouteSectionId)

            .use(Auth0Provider.getAuthorizedUserInfo)

            .post('', this.createRouteSection)
            .delete('/:routeSectionId', this.deleteRouteSection)


    }







    async getAllRouteSections(request, response, next) {

        try {

            console.log('Getting all route sections')
            const routeSections = await routeSectionsService.getAllRouteSections()
            response.send(routeSections)

        }

        catch (error) {
            next(error)


        }

    }

    async getRouteSectionById(request, response, next) {

        try {

            const routeSectionId = request.params.routeSectionId

            const routeSectionToGet = await routeSectionsService.getRouteSectionById(routeSectionId)

            response.send(routeSectionToGet)



        }

        catch (error) {
            next(error)


        }
    }



    async getRoutesBySectionId(request, response, next) {

        try {

            const routeSectionId = request.params.routeSectionId
            console.log('Getting routes that belong to specific wall section.')

            const routesBySection = await routesService.getRoutesBySection(routeSectionId)
            response.send(routesBySection)


        }

        catch (error) {

            next(error)
        }

    }

    async createRouteSection(request, response, next) {

        try {

            console.log('yo')
            const routeSectionData = request.body;

            // const userId = request.userInfo.id;
            // routeSectionData.authorId = userId;

            const userinfo = request.userinfo
            routeSectionData.creatorId = userinfo.id

            const createdRouteSection = await routeSectionsService.createRouteSection(routeSectionData)

            response.send(createdRouteSection)




        }


        catch (error) {

            next(error)
        }

    }

    async deleteRouteSection(request, response, next) {

        try {
            const routeSectionId = request.params.routeSectionId

            // const userId = request.userInfo.id;
            // routeSectionData.setterId = userId;



            const userId = request.userInfo.id



            const routeSectionToDelete = await routeSectionsService.deleteRouteSection(routeSectionId, userId)

            response.send(routeSectionToDelete)


        }

        catch (error) {
            next(error)


        }



    }

    async getWatchersByAlbumId(request, response, next) {

        try {

            const routeSectionId = request.params.routeSectionId


        }

        catch (error) {
            next(error)


        }


    }

}