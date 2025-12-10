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




}

export const routeSectionsService = new RouteSectionsService()