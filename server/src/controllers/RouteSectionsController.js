
import { routeSectionsService } from "../services/RouteSectionsService.js";
import BaseController from "../utils/BaseController.js";


export class RouteSectionsController extends BaseController {

    constructor() {

        super('api/sections')
        this.router
            .get('', this.getAllRouteSections)
            // .use(Auth0Provider.getAuthorizedUserInfo)

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

    async createRouteSection(request, response, next) {

        try {

            console.log('yo')
            const routeSectionData = request.body;

            // const userId = request.userInfo.id;
            // routeSectionData.authorId = userId;

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

            //will definitely need to fix the auth0 lines later, not quite right

            const routeSectionToDelete = await routeSectionsService.deleteRouteSection(routeSectionId)

            response.send(routeSectionToDelete)


        }

        catch (error) {
            next(error)


        }



    }

}