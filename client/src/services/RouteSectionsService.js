import { RouteSection } from "@/models/RouteSection.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { logger } from "@/utils/Logger.js"


class RouteSectionsService {

    async getRouteSections() {

        const response = await api.get('api/sections')
        console.log('🍟', response.data)

        const routeSections = response.data.map(pojo => new RouteSection(pojo))
        AppState.routeSections = routeSections



    }

    async getRouteSectionById(routeSectionId) {

        AppState.activeRouteSection = null
        const response = await api.get(`api/sections/${routeSectionId}`)
        logger.log('⭐️', response.data)

        const routeSection = new RouteSection(response.data)
        AppState.activeRouteSection = routeSection


    }

    async createRouteSection(routeSectionData) {

        const response = await api.post('api/sections', routeSectionData)
        logger.log('🎨', response.data)

        const createdRouteSection = new RouteSection(response.data)
        AppState.routeSections.push(createdRouteSection)

        //Above two lines needed for new section to appear on page without refreshing...



    }

    async deleteRouteSection(sectionId) {


        const response = await api.delete(`api/sections/${sectionId}`)
        logger.log('DELETED POST', response.data)

        const index = AppState.routeSections.findIndex(routeSection => routeSection.id == sectionId)
        AppState.routeSections.splice(index, 1)

        //Why do I need above two lines? Even on refresh, sections stay deleted without the two above lines. Hmmm... 
    }




}

export const routeSectionsService = new RouteSectionsService()